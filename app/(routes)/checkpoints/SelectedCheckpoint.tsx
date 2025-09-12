import Checkpoint from '@/app/utils/types/checkpoint';

interface SelectedCheckpointProps {
  selectedCheckpoint: Checkpoint;
}

const SelectedCheckpoint: React.FC<SelectedCheckpointProps> = ({
  selectedCheckpoint,
}) => {
  return (
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
            <span className='font-medium text-gray-700'>Mile Markers:</span>{' '}
            {selectedCheckpoint.mileMarkers}
          </div>
        )}
        <div className='md:col-span-2'>
          <span className='font-medium text-gray-700'>Coordinates:</span>{' '}
          {selectedCheckpoint.coordinates}
        </div>
      </div>
    </div>
  );
};

export default SelectedCheckpoint;
