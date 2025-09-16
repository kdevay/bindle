import cn from '@/app/utils/functions/cn';

interface MapTabProps {
  activeTab: 'map' | 'table';
  tabSlug: 'map' | 'table';
  tabIcon: React.ReactNode;
  setActiveTab: () => void;
}

const MapTab: React.FC<MapTabProps> = ({
  activeTab,
  tabSlug,
  tabIcon,
  setActiveTab,
}) => {
  // Capitalize the first letter of the tabSlug
  const tabLabel = tabSlug.charAt(0).toUpperCase() + tabSlug.slice(1);
  return (
    <>
      <button
        onClick={setActiveTab}
        className={cn(
          'flex items-center justify-center gap-2 p-3 md:py-4 md:px-6 w-full font-medium transition-colors',
          tabSlug === 'map' ? 'rounded-tl-xl' : 'rounded-tr-xl',
          activeTab === 'map' &&
            (tabSlug === 'map'
              ? 'border-b-2 border-blue-600 bg-blue-50 text-black'
              : 'text-gray-500 hover:text-gray-700'),
          activeTab === 'table' &&
            (tabSlug === 'table'
              ? 'border-b-2 border-blue-600 bg-blue-50 text-black'
              : 'text-gray-500 hover:text-gray-700'),
        )}
      >
        {tabIcon}
        <p className='flex flex-shrink-0 flex-grow-0'>
          {tabLabel} <span className='hidden md:block'>View</span>
        </p>
      </button>
    </>
  );
};

export default MapTab;
