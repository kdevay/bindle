'use client';
import { useState, useMemo } from 'react';
import PageLayout from '@/app/components/PageLayout';
import Checkpoint from '@/app/utils/types/checkpoint';
import checkpointsData from '@/app/utils/constants/checkpoints';
import DesktopCheckpoints from './DesktopComponent';
import MobileCheckpoints from './MobileComponent';

const Checkpoints: React.FC = () => {
  // All state lives here in the main component
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<keyof Checkpoint>('state');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [selectedCheckpoint, setSelectedCheckpoint] =
    useState<Checkpoint | null>(null);
  const [activeTab, setActiveTab] = useState<'map' | 'table'>('map');

  // Computed data based on state
  const filteredAndSortedData = useMemo(() => {
    return checkpointsData
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
  }, [searchTerm, sortField, sortDirection]);

  // Update functions that children can call
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
    <PageLayout contentStyles='w-full h-full flex flex-col gap-[32px] row-start-2 items-start pb-8'>
      <div className='w-full max-w-7xl mx-auto h-full'>
        <div className='mb-8'>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Border Checkpoint Locations
          </h1>
          <p className='text-lg text-gray-600'>
            Click markers or table rows to select a checkpoint and view details
            about its location.
          </p>
        </div>

        {/* Main Content Container */}
        <div className='bg-white rounded-xl lg:rounded-xl lg:rounded-t-xl shadow-lg overflow-hidden h-full'>
          {/* Desktop Layout Component */}
          <DesktopCheckpoints
            checkpoints={filteredAndSortedData}
            totalCheckpoints={checkpointsData.length}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            sortValue={getSortValue()}
            handleSortChange={handleSortChange}
            selectedCheckpoint={selectedCheckpoint}
            setSelectedCheckpoint={setSelectedCheckpoint}
          />

          {/* Mobile Layout Component */}
          <MobileCheckpoints
            checkpoints={filteredAndSortedData}
            totalCheckpoints={checkpointsData.length}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            sortValue={getSortValue()}
            handleSortChange={handleSortChange}
            selectedCheckpoint={selectedCheckpoint}
            setSelectedCheckpoint={setSelectedCheckpoint}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Checkpoints;
