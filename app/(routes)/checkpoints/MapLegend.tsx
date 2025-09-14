import React, { useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/app/components/collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';
import cn from '@/app/utils/functions/cn';

interface MapLegendProps {
  className?: string;
}

const MapLegend: React.FC<MapLegendProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        'absolute top-4 right-4 bg-white rounded-lg shadow-lg z-[1000] w-[220px]',
        className,
      )}
    >
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className='flex items-center justify-between w-full hover:bg-gray-50 p-2 px-4 rounded-full transition-colors'>
          <h4 className='font-semibold text-gray-900'>Legend</h4>
          {isOpen ? (
            <ChevronUp className='h-4 w-4 text-gray-600 flex-shrink-0' />
          ) : (
            <ChevronDown className='h-4 w-4 text-gray-600 flex-shrink-0' />
          )}
        </CollapsibleTrigger>

        <CollapsibleContent className='p-4 border-t border-gray-100'>
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
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default MapLegend;
