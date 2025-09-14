import L from 'leaflet';
export interface MapIconOptions {
  size?: number;
  bgColor?: string;
  borderColor?: string;
  innerColor?: string;
  animate?: boolean;
}

export const createMapIcon = (options: MapIconOptions = {}) => {
  const {
    size = 24,
    bgColor = 'bg-red-500',
    borderColor = 'border-white',
    innerColor = 'bg-white',
    animate = false,
  } = options;

  const outerSize = size === 32 ? 'w-8 h-8' : 'w-6 h-6';
  const innerSize = size === 32 ? 'w-3 h-3' : 'w-2 h-2';
  const borderWidth = size === 32 ? 'border-3' : 'border-2';
  const animateClass = animate ? 'animate-pulse' : '';

  return L.divIcon({
    html: `<div class="${outerSize} ${bgColor} ${borderWidth} ${borderColor} rounded-full shadow-lg flex items-center justify-center ${animateClass}">
             <div class="${innerSize} ${innerColor} rounded-full"></div>
           </div>`,
    className: 'custom-marker',
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
};
