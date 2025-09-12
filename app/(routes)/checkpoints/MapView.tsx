'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Checkpoint {
  id: number;
  state: string;
  highway: string;
  location: string;
  mileMarkers?: string;
  coordinates: string;
  lat: number;
  lng: number;
}

interface MapViewProps {
  checkpoints: Checkpoint[];
  selectedCheckpoint: Checkpoint | null;
  onCheckpointSelect: (checkpoint: Checkpoint) => void;
}

const MapView: React.FC<MapViewProps> = ({
  checkpoints,
  selectedCheckpoint,
  onCheckpointSelect,
}) => {
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: number]: L.Marker }>({});

  useEffect(() => {
    // Fix for default markers in Leaflet
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
      iconUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
      shadowUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    });

    // Initialize map
    if (!mapRef.current) {
      mapRef.current = L.map('map').setView([29.5, -102], 6);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Update markers when checkpoints change
  useEffect(() => {
    if (!mapRef.current) return;

    // Clear existing markers
    Object.values(markersRef.current).forEach(marker => {
      mapRef.current?.removeLayer(marker);
    });
    markersRef.current = {};

    // Create custom icons
    const texasIcon = L.divIcon({
      html: `<div class="w-6 h-6 bg-red-500 border-2 border-white rounded-full shadow-lg flex items-center justify-center">
               <div class="w-2 h-2 bg-white rounded-full"></div>
             </div>`,
      className: 'custom-marker',
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });

    const newMexicoIcon = L.divIcon({
      html: `<div class="w-6 h-6 bg-blue-500 border-2 border-white rounded-full shadow-lg flex items-center justify-center">
               <div class="w-2 h-2 bg-white rounded-full"></div>
             </div>`,
      className: 'custom-marker',
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });

    const selectedIcon = L.divIcon({
      html: `<div class="w-8 h-8 bg-yellow-400 border-3 border-yellow-600 rounded-full shadow-lg flex items-center justify-center animate-pulse">
               <div class="w-3 h-3 bg-yellow-800 rounded-full"></div>
             </div>`,
      className: 'custom-marker',
      iconSize: [32, 32],
      iconAnchor: [16, 16],
    });

    // Add markers for each checkpoint
    checkpoints.forEach(checkpoint => {
      let icon = checkpoint.state === 'Texas' ? texasIcon : newMexicoIcon;

      if (selectedCheckpoint?.id === checkpoint.id) {
        icon = selectedIcon;
      }

      const marker = L.marker([checkpoint.lat, checkpoint.lng], { icon })
        .addTo(mapRef.current!)
        .bindPopup(
          `
          <div class="p-3 min-w-[250px]">
            <h4 class="font-bold text-lg text-gray-900 mb-2">${
              checkpoint.highway
            }</h4>
            <div class="space-y-1 text-sm">
              <div><span class="font-medium">State:</span> ${
                checkpoint.state
              }</div>
              <div><span class="font-medium">Location:</span> ${
                checkpoint.location
              }</div>
              ${
                checkpoint.mileMarkers
                  ? `<div><span class="font-medium">Mile Markers:</span> ${checkpoint.mileMarkers}</div>`
                  : ''
              }
              <div class="pt-2 text-xs text-gray-600 font-mono">${
                checkpoint.coordinates
              }</div>
            </div>
          </div>
        `,
        )
        .on('click', () => {
          onCheckpointSelect(checkpoint);
        });

      markersRef.current[checkpoint.id] = marker;
    });
  }, [checkpoints, selectedCheckpoint, onCheckpointSelect]);

  // Center map on selected checkpoint
  useEffect(() => {
    if (selectedCheckpoint && mapRef.current) {
      mapRef.current.setView(
        [selectedCheckpoint.lat, selectedCheckpoint.lng],
        10,
      );
      markersRef.current[selectedCheckpoint.id]?.openPopup();
    }
  }, [selectedCheckpoint]);

  return (
    <div className='relative w-full h-full'>
      <div
        id='map'
        className='w-full h-full rounded-l-xl lg:rounded-r-none'
      ></div>

      {/* Map Legend */}
      <div className='absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg z-[1000]'>
        <h4 className='font-semibold text-gray-900 mb-3'>Legend</h4>
        <div className='space-y-2 text-sm'>
          <div className='flex items-center gap-2'>
            <div className='w-4 h-4 bg-red-500 rounded-full border border-white'></div>
            <span>Texas Checkpoints</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-4 h-4 bg-blue-500 rounded-full border border-white'></div>
            <span>New Mexico Checkpoints</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-4 h-4 bg-yellow-400 rounded-full border border-yellow-600'></div>
            <span>Selected</span>
          </div>
        </div>
        <div className='mt-3 pt-3 border-t border-gray-200 text-xs text-gray-600'>
          Click markers or table rows to select
        </div>
      </div>

      {/* Checkpoint Counter */}
      <div className='absolute bottom-4 left-4 bg-black bg-opacity-75 text-white px-3 py-2 rounded-lg text-sm z-[1000]'>
        {checkpoints.length} checkpoint{checkpoints.length !== 1 ? 's' : ''}{' '}
        displayed
      </div>
    </div>
  );
};

export default MapView;
