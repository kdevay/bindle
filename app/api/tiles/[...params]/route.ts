import { NextRequest, NextResponse } from 'next/server';

/* 
Proxy for OpenStreetMap tiles to hide user IPs such that:
  - OSM servers see the app server's IP address, not individual users' IPs
  - Users' browsing patterns and locations are hidden from OSM
  - OSM can't directly correlate tile requests with individual users

Caveat: vercel does log users' IP addresses on all pages, price of free hosting;
*/

export async function GET(
  // the incoming request object
  request: NextRequest,
  // route parameters wrapped in a Promise
  { params }: { params: Promise<{ params: string[] }> },
) {
  try {
    // Await the params Promise to get the actual parameter values
    // This is necessary because Next.js 15+ wraps params in a Promise
    const resolvedParams = await params;

    // Extract the tile parameters from the URL params
    // z (zoom level), x (tile column), y (tile row)
    if (!resolvedParams.params || resolvedParams.params.length !== 3) {
      return NextResponse.json(
        { error: 'Invalid tile parameters' },
        { status: 400 },
      );
    }

    const [z, x, y] = resolvedParams.params;

    // Validate parameters to prevent abuse
    const zoom = parseInt(z);
    const tileX = parseInt(x);
    const tileY = parseInt(y);

    // Check if zoom level is within OSM supported range (0-18) and x,y are valid numbers
    if (zoom < 0 || zoom > 18 || isNaN(tileX) || isNaN(tileY)) {
      return NextResponse.json(
        { error: 'Invalid tile coordinates' },
        { status: 400 },
      );
    }

    // Choose random OSM server (a, b, or c) for load balancing
    const servers = ['a', 'b', 'c'];
    const server = servers[Math.floor(Math.random() * servers.length)];

    // Construct the complete URL for the tile request
    // Format: https://{server}.tile.openstreetmap.org/{z}/{x}/{y}.png
    const tileUrl = `https://${server}.tile.openstreetmap.org/${z}/${x}/${y}.png`;

    // Fetch the tile from OpenStreetMap with a proper User-Agent header
    // to identify our application to OSM servers
    const response = await fetch(tileUrl, {
      headers: {
        'User-Agent': 'Checkpoint Map Application (Educational Use)',
      },
    });

    // If fetch request fails, return an error
    if (!response.ok) {
      return NextResponse.json(
        { error: 'Tile not found' },
        { status: response.status },
      );
    }

    // Convert the response to an ArrayBuffer to handle binary image data
    const buffer = await response.arrayBuffer();

    // Return the tile image with appropriate headers

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=86400', // Cache for 24h to improve performance
        'Access-Control-Allow-Origin': '*', // Allow CORS if needed
      },
    });
  } catch (error) {
    console.error('Tile proxy error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
