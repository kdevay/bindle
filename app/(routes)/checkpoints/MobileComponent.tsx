// MobileCheckpoints.tsx
'use client';
import { Input } from '../../components/input';
import CheckpointTable from './CheckpointTable';
import DropdownSelect from '@/app/components/DropdownSelect';
import Checkpoint from '@/app/utils/types/checkpoint';
import dynamic from 'next/dynamic';
import { MapIcon, TableIcon } from 'lucide-react';
import MapLegend from './MapLegend';

// Dynamically import map component to avoid SSR issues
const MapView = dynamic(() => import('@/app/(routes)/checkpoints/MapView'), {
  ssr: false,
  loading: () => (
    <div className='w-full h-[500px] bg-gray-100 rounded-lg animate-pulse flex items-center justify-center'>
      Loading Map...
    </div>
  ),
});

interface MobileCheckpointsProps {
  checkpoints: Checkpoint[];
  totalCheckpoints: number;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  sortValue: string;
  handleSortChange: (value: string) => void;
  selectedCheckpoint: Checkpoint | null;
  setSelectedCheckpoint: (checkpoint: Checkpoint | null) => void;
  activeTab: 'map' | 'table';
  setActiveTab: (tab: 'map' | 'table') => void;
}

const MobileCheckpoints: React.FC<MobileCheckpointsProps> = ({
  checkpoints,
  totalCheckpoints,
  searchTerm,
  setSearchTerm,
  sortValue,
  handleSortChange,
  selectedCheckpoint,
  setSelectedCheckpoint,
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className='lg:hidden rounded-t-xl'>
      {/* Mobile Tab Navigation */}
      <div className='bg-white rounded-t-xl shadow-lg'>
        <div className='flex border-b border-gray-200 rounded-t-xl'>
          <button
            onClick={() => setActiveTab('map')}
            className={`flex items-center justify-center gap-2 py-4 px-6 w-full font-medium transition-colors rounded-tl-xl ${
              activeTab === 'map'
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <MapIcon />
            <p className='flex flex-shrink-0 flex-grow-0'>
              Map <span className='hidden md:block'>View</span>
            </p>
          </button>
          <button
            onClick={() => setActiveTab('table')}
            className={`flex items-center justify-center gap-2 py-4 px-6 w-full font-medium transition-colors rounded-tr-xl ${
              activeTab === 'table'
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <TableIcon />
            <p className='flex flex-shrink-0 flex-grow-0'>
              Table <span className='hidden md:block'>View</span>
            </p>
          </button>
        </div>
      </div>
      {/* Search - Always visible on mobile */}
      <div className='p-4 bg-gray-50 border-b border-gray-200'>
        <Input
          type='text'
          placeholder='Search by state, highway, or location...'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className='w-full bg-white'
        />
      </div>
      {activeTab !== 'table' && (
        <MapLegend className='w-full static bg-gray-50' />
      )}
      {/* Sort and Filters - Only visible for table view */}
      {activeTab === 'table' && (
        <div className='px-4 py-3 bg-gray-50 border-b border-gray-200 text-sm text-gray-600 flex items-center justify-between'>
          <span>
            {checkpoints?.length || 0} of {totalCheckpoints} checkpoints
          </span>
          {/* Sort */}
          <DropdownSelect
            className='shadow-none bg-transparent text-xs'
            value={sortValue}
            onChange={handleSortChange}
            options={[
              { value: 'state-asc', label: 'State (A-Z)' },
              { value: 'state-desc', label: 'State (Z-A)' },
              { value: 'highway-asc', label: 'Highway (A-Z)' },
              { value: 'highway-desc', label: 'Highway (Z-A)' },
            ]}
            ariaOptionType='sort'
          />
        </div>
      )}
      {/* Tab Content */}
      <div className='min-h-[500px]'>
        {activeTab === 'map' && (
          <div key='mobile-map' className='h-[500px] relative'>
            <MapView
              mapId='mobile-map'
              checkpoints={checkpoints}
              selectedCheckpoint={selectedCheckpoint}
              onCheckpointSelect={setSelectedCheckpoint}
            />
          </div>
        )}
        {activeTab === 'table' && (
          <div className='max-h-[500px] overflow-hidden'>
            <CheckpointTable
              checkpointData={checkpoints}
              selectedCheckpoint={selectedCheckpoint}
              setSelectedCheckpoint={setSelectedCheckpoint}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileCheckpoints;
