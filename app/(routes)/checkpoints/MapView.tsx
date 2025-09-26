'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { createMapIcon } from './helpers';
import MapLegend from './MapLegend';

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
  mapId?: string; // Add mapId prop
}

const MapView: React.FC<MapViewProps> = ({
  checkpoints,
  selectedCheckpoint,
  onCheckpointSelect,
  mapId = 'map', // Default fallback
}) => {
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: number]: L.Marker }>({});

  // Initialize map
  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map(mapId).setView([29.5, -102], 6);

      // Use proxied tiles instead of direct OSM to protect user IPs
      L.tileLayer('/api/tiles/{z}/{x}/{y}', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18,
      }).addTo(mapRef.current);
    }

    // Cleanup function
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [mapId]); // Add mapId to dependency array

  // Update markers when checkpoints change
  useEffect(() => {
    if (!mapRef.current) return;

    // Clear existing markers
    Object.values(markersRef.current).forEach(marker => {
      mapRef.current?.removeLayer(marker);
    });
    markersRef.current = {};

    // Create leaflet icons
    const texasIcon = createMapIcon({
      bgColor: 'bg-red-500',
      borderColor: 'border-white',
      innerColor: 'bg-white',
    });
    const newMexicoIcon = createMapIcon({
      bgColor: 'bg-blue-500',
      borderColor: 'border-white',
      innerColor: 'bg-white',
    });
    const selectedIcon = createMapIcon({
      size: 32,
      bgColor: 'bg-yellow-400',
      borderColor: 'border-yellow-600',
      innerColor: 'bg-white',
      animate: true,
    });

    // Add leaflet markers for each checkpoint
    checkpoints.forEach(checkpoint => {
      let icon = checkpoint.state === 'Texas' ? texasIcon : newMexicoIcon;

      // Set selected icon if the checkpoint is selected
      if (selectedCheckpoint?.id === checkpoint.id) {
        icon = selectedIcon;
      }

      // Create marker
      const marker = L.marker([checkpoint.lat, checkpoint.lng], { icon })
        .addTo(mapRef.current!)
        .bindPopup(
          `
          <div class=" min-w-[250px]">
          <h4 class="font-bold text-lg text-gray-900 mb-2">
          ${checkpoint.state} Checkpoint
          </h4>
            <div class="space-y-1 text-sm">
              <div><span class="font-medium">Highway:</span> ${
                checkpoint.highway
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

      // Add marker to reference
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
        id={mapId} // Use the dynamic mapId
        className='w-full h-full'
      ></div>

      {/* Map Legend */}
      <MapLegend className='hidden lg:block' />
    </div>
  );
};

export default MapView;
