import Checkpoint from '@/app/utils/types/checkpoint';

interface CheckpointTableProps {
  checkpointData: Checkpoint[];
  selectedCheckpoint: Checkpoint | null;
  setSelectedCheckpoint: (checkpoint: Checkpoint) => void;
}

const CheckpointTable: React.FC<CheckpointTableProps> = ({
  checkpointData,
  selectedCheckpoint,
  setSelectedCheckpoint,
}) => {
  return (
    <div className='flex-1 overflow-auto'>
      <table className='w-full text-sm table-fixed'>
        <thead className='bg-gray-50 sticky top-0'>
          <tr>
            <th className='px-4 py-3 text-left font-medium lg:w-32 text-gray-900'>
              State
            </th>
            <th className='px-4 py-3 text-left font-medium lg:w-32 text-gray-900'>
              Highway
            </th>
            <th className='px-4 py-3 text-left font-medium text-gray-900'>
              Location
            </th>
          </tr>
        </thead>
        <tbody>
          {checkpointData.map((checkpoint, index) => (
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
              <td className='p-2 md:p-4 w-fit min-w-[100px]'>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    checkpoint.state === 'Texas'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {checkpoint.state}
                </span>
              </td>
              <td className='p-2 md:p-4 font-medium text-gray-900'>
                {checkpoint.highway}
              </td>
              <td className='p-2 md:p-4 text-gray-700 flex flex-wrap'>
                {checkpoint.location}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CheckpointTable;
