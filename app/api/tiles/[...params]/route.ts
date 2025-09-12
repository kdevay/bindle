// Proxy for OpenStreetMap tiles to hide user IPs
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ params: string[] }> },
) {
  try {
    // Await params
    const resolvedParams = await params;

    // Extract z, x, y from the URL params
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

    if (zoom < 0 || zoom > 18 || isNaN(tileX) || isNaN(tileY)) {
      return NextResponse.json(
        { error: 'Invalid tile coordinates' },
        { status: 400 },
      );
    }

    // Choose random OSM server (a, b, or c) for load balancing
    const servers = ['a', 'b', 'c'];
    const server = servers[Math.floor(Math.random() * servers.length)];

    const tileUrl = `https://${server}.tile.openstreetmap.org/${z}/${x}/${y}.png`;

    // Fetch the tile from OpenStreetMap
    const response = await fetch(tileUrl, {
      headers: {
        'User-Agent': 'Checkpoint Map Application (Educational Use)',
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Tile not found' },
        { status: response.status },
      );
    }

    const buffer = await response.arrayBuffer();

    // Return the tile image with appropriate headers
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
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
