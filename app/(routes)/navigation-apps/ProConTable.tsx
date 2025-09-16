interface ProConTableProps {
  pros: string[];
  cons: string[];
}

const ProConTable: React.FC<ProConTableProps> = ({ pros, cons }) => {
  // Get the maximum length to ensure all items are displayed
  const maxLength = Math.max(pros.length, cons.length);
  return (
    <div className='w-full'>
      <div>
        <table className='w-full border-collapse'>
          <thead>
            <tr>
              <th className='border border-black px-6 py-4 text-left font-semibold0'>
                Pro
              </th>
              <th className='border border-black px-6 py-4 text-left font-semibold'>
                Con
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: maxLength }).map((_, index) => (
              <tr key={index}>
                <td className='border border-black px-6 py-3'>
                  {pros[index] || ''}
                </td>
                <td className='border border-black px-6 py-3'>
                  {cons[index] || ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProConTable;

import React from 'react';
