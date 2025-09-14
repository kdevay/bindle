'use client';
import { Input } from '../../components/input';
import CheckpointTable from './CheckpointTable';
import DropdownSelect from '@/app/components/DropdownSelect';
import Checkpoint from '@/app/utils/types/checkpoint';
import dynamic from 'next/dynamic';

// Dynamically import map component to avoid SSR issues
const MapView = dynamic(() => import('@/app/(routes)/checkpoints/MapView'), {
  ssr: false,
  loading: () => (
    <div className='w-full h-[500px] bg-gray-100 rounded-lg animate-pulse flex items-center justify-center'>
      Loading Map...
    </div>
  ),
});

interface DesktopCheckpointsProps {
  checkpoints: Checkpoint[];
  totalCheckpoints: number;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  sortValue: string;
  handleSortChange: (value: string) => void;
  selectedCheckpoint: Checkpoint | null;
  setSelectedCheckpoint: (checkpoint: Checkpoint | null) => void;
}

const DesktopCheckpoints: React.FC<DesktopCheckpointsProps> = ({
  checkpoints,
  totalCheckpoints,
  searchTerm,
  setSearchTerm,
  sortValue,
  handleSortChange,
  selectedCheckpoint,
  setSelectedCheckpoint,
}) => {
  return (
    <div className='hidden lg:flex lg:flex-row h-full'>
      {/* Map Section */}
      <div className='flex-1 relative'>
        <MapView
          key='desktop-map'
          mapId='desktop-map'
          checkpoints={checkpoints}
          selectedCheckpoint={selectedCheckpoint}
          onCheckpointSelect={setSelectedCheckpoint}
        />
      </div>

      {/* Table, filters, and search */}
      <div className='flex-1 flex flex-col border-l border-gray-200'>
        <div className='p-6 bg-gray-50 border-b border-gray-200'>
          <h3 className='text-xl font-semibold text-gray-900 mb-4'>
            Checkpoint Details
          </h3>

          {/* Search */}
          <Input
            type='text'
            placeholder='Search by state, highway, or location...'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className='flex-1 bg-white mb-4'
          />

          {/* Result count & Sort dropdown */}
          <div className='text-sm text-gray-600 flex items-center justify-between'>
            Showing {checkpoints?.length || 0} of {totalCheckpoints} checkpoints
            <label htmlFor='sort-select' className='sr-only'>
              Sort by:
            </label>
            <DropdownSelect
              className='shadow-none bg-transparent'
              value={sortValue}
              onChange={handleSortChange}
              options={[
                { value: 'state-asc', label: 'Sort by State (A-Z)' },
                { value: 'state-desc', label: 'Sort by State (Z-A)' },
                { value: 'highway-asc', label: 'Sort by Highway (A-Z)' },
                { value: 'highway-desc', label: 'Sort by Highway (Z-A)' },
              ]}
              ariaOptionType='sort'
            />
          </div>
        </div>

        <CheckpointTable
          checkpointData={checkpoints}
          selectedCheckpoint={selectedCheckpoint}
          setSelectedCheckpoint={setSelectedCheckpoint}
        />
      </div>
    </div>
  );
};

export default DesktopCheckpoints;
