'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import PageLayout from '@/app/components/PageLayout';
import Checkpoint from '@/app/utils/types/checkpoint';
import checkpointsData from '@/app/utils/data/checkpoints';
import { Input } from '../../components/input';
import CheckpointTable from './CheckpointTable';
import SelectedCheckpoint from './SelectedCheckpoint';
import DropdownSelect from '@/app/components/DropdownSelect';

// Dynamically import map component to avoid SSR issues
const MapView = dynamic(() => import('@/app/(routes)/checkpoints/MapView'), {
  ssr: false,
  loading: () => (
    <div className='w-full h-[500px] bg-gray-100 rounded-lg animate-pulse flex items-center justify-center'>
      Loading Map...
    </div>
  ),
});

interface CheckpointsProps {}

const Checkpoints: React.FC<CheckpointsProps> = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<keyof Checkpoint>('state');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [selectedCheckpoint, setSelectedCheckpoint] =
    useState<Checkpoint | null>(null);

  // Filter and sort data
  const filteredAndSortedData = checkpointsData
    .filter(
      checkpoint =>
        checkpoint.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
        checkpoint.highway.toLowerCase().includes(searchTerm.toLowerCase()) ||
        checkpoint.location.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });

  const handleSortChange = (value: string) => {
    const [field, direction] = value.split('-') as [
      keyof Checkpoint,
      'asc' | 'desc',
    ];
    setSortField(field);
    setSortDirection(direction);
  };

  const getSortValue = () => {
    return `${sortField}-${sortDirection}`;
  };

  return (
    <PageLayout contentStyles='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='mb-8'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            Border Checkpoint Locations
          </h1>
          <p className='text-lg text-gray-600'>
            Interactive map and detailed table of checkpoint locations across
            New Mexico and Texas
          </p>
        </div>

        {/* Outer Container */}
        <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
          <div className='flex flex-col lg:flex-row h-[800px]'>
            {/* Map Section */}
            <div className='flex-1 relative'>
              <MapView
                checkpoints={filteredAndSortedData}
                selectedCheckpoint={selectedCheckpoint}
                onCheckpointSelect={setSelectedCheckpoint}
              />
            </div>

            {/* Table, filters, and search */}
            <div className='flex-1 flex flex-col border-t lg:border-t-0 lg:border-l border-gray-200'>
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
                  className='flex-1 bg-white'
                />

                <div className='text-sm text-gray-600 flex items-center justify-between'>
                  Showing {filteredAndSortedData.length} of{' '}
                  {checkpointsData.length} checkpoints
                  {/* Sort */}
                  <label htmlFor='sort-select' className='sr-only'>
                    Sort by:
                  </label>
                  <DropdownSelect
                    className='shadow-none bg-transparent'
                    value={getSortValue()}
                    onChange={handleSortChange}
                    options={[
                      { value: 'state-asc', label: 'Sort by State (A-Z)' },
                      { value: 'state-desc', label: 'Sort by State (Z-A)' },
                      {
                        value: 'highway-asc',
                        label: 'Sort by Highway (A-Z)',
                      },
                      {
                        value: 'highway-desc',
                        label: 'Sort by Highway (Z-A)',
                      },
                    ]}
                    ariaOptionType='sort'
                  />
                </div>
              </div>
              <CheckpointTable
                checkpointData={filteredAndSortedData}
                selectedCheckpoint={selectedCheckpoint}
                setSelectedCheckpoint={setSelectedCheckpoint}
              />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

      {/* Selected Checkpoint Info */}
      {selectedCheckpoint && (
        <SelectedCheckpoint selectedCheckpoint={selectedCheckpoint} />
      )}
    </PageLayout>
  );
};

export default Checkpoints;
