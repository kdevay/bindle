'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import PageLayout from '@/app/components/PageLayout';
import Checkpoint from '@/app/utils/checkpoint';
import checkpointsData from '@/app/utils/data/checkpoints';

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

  const handleSort = (field: keyof Checkpoint) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const SortIcon = ({ field }: { field: keyof Checkpoint }) => {
    if (sortField !== field) {
      return <span className='text-gray-400'>↕</span>;
    }
    return sortDirection === 'asc' ? (
      <span className='text-blue-600'>↑</span>
    ) : (
      <span className='text-blue-600'>↓</span>
    );
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

        {/* Map and Table Container */}
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

            {/* Table Section */}
            <div className='flex-1 flex flex-col border-t lg:border-t-0 lg:border-l border-gray-200'>
              <div className='p-6 bg-gray-50 border-b border-gray-200'>
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                  Checkpoint Details
                </h3>
                <input
                  type='text'
                  placeholder='Search by state, highway, or location...'
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
                />
                <div className='mt-3 text-sm text-gray-600'>
                  Showing {filteredAndSortedData.length} of{' '}
                  {checkpointsData.length} checkpoints
                </div>
              </div>

              <div className='flex-1 overflow-auto'>
                <table className='w-full text-sm'>
                  <thead className='bg-gray-50 sticky top-0'>
                    <tr>
                      <th
                        className='px-4 py-3 text-left font-medium text-gray-900 cursor-pointer hover:bg-gray-100 transition-colors'
                        onClick={() => handleSort('state')}
                      >
                        <div className='flex items-center gap-2'>
                          State <SortIcon field='state' />
                        </div>
                      </th>
                      <th
                        className='px-4 py-3 text-left font-medium text-gray-900 cursor-pointer hover:bg-gray-100 transition-colors'
                        onClick={() => handleSort('highway')}
                      >
                        <div className='flex items-center gap-2'>
                          Highway <SortIcon field='highway' />
                        </div>
                      </th>
                      <th className='px-4 py-3 text-left font-medium text-gray-900'>
                        Location
                      </th>
                      <th className='px-4 py-3 text-left font-medium text-gray-900'>
                        Mile Markers
                      </th>
                      <th className='px-4 py-3 text-left font-medium text-gray-900'>
                        Coordinates
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAndSortedData.map((checkpoint, index) => (
                      <tr
                        key={checkpoint.id}
                        className={`border-t border-gray-100 hover:bg-blue-50 transition-colors cursor-pointer ${
                          selectedCheckpoint?.id === checkpoint.id
                            ? 'bg-blue-100'
                            : index % 2 === 0
                            ? 'bg-gray-50'
                            : 'bg-white'
                        }`}
                        onClick={() => setSelectedCheckpoint(checkpoint)}
                      >
                        <td className='px-4 py-3'>
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                              checkpoint.state === 'Texas'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-blue-100 text-blue-800'
                            }`}
                          >
                            {checkpoint.state}
                          </span>
                        </td>
                        <td className='px-4 py-3 font-medium text-gray-900'>
                          {checkpoint.highway}
                        </td>
                        <td className='px-4 py-3 text-gray-700'>
                          {checkpoint.location}
                        </td>
                        <td className='px-4 py-3 text-gray-600 text-center'>
                          {checkpoint.mileMarkers || '—'}
                        </td>
                        <td className='px-4 py-3 text-gray-600 font-mono text-xs'>
                          {checkpoint.coordinates}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Checkpoint Info */}
        {selectedCheckpoint && (
          <div className='mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200'>
            <h3 className='text-lg font-semibold text-gray-900 mb-2'>
              Selected Checkpoint
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm'>
              <div>
                <span className='font-medium text-gray-700'>State:</span>{' '}
                {selectedCheckpoint.state}
              </div>
              <div>
                <span className='font-medium text-gray-700'>Highway:</span>{' '}
                {selectedCheckpoint.highway}
              </div>
              <div>
                <span className='font-medium text-gray-700'>Location:</span>{' '}
                {selectedCheckpoint.location}
              </div>
              {selectedCheckpoint.mileMarkers && (
                <div>
                  <span className='font-medium text-gray-700'>
                    Mile Markers:
                  </span>{' '}
                  {selectedCheckpoint.mileMarkers}
                </div>
              )}
              <div className='md:col-span-2'>
                <span className='font-medium text-gray-700'>Coordinates:</span>{' '}
                {selectedCheckpoint.coordinates}
              </div>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Checkpoints;
