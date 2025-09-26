import PageLayout from '@/app/components/PageLayout';
import Image from 'next/image';
import locationSecurityChecklist from '@/app/utils/constants/locationSecurityChecklist';
import Hero from '@/app/components/Hero';
import TextAndImageGrid from './TextAndImageGrid';

interface LocationTrackingProps {}

const LocationTracking: React.FC<LocationTrackingProps> = () => {
  return (
    <PageLayout contentStyles='flex flex-col gap-8 items-center sm:items-start'>
      <Hero
        title='Why should I care about location tracking?'
        imageElement={
          <Image
            src='/mountains.png'
            alt='Mountain landscape'
            width={1760}
            height={466}
            className='w-auto h-full min-w-full object-cover object-top'
          />
        }
      />
      <div className='flex flex-col gap-4 w-full'>
        <div className='flex flex-col gap-4'>
          <p className='w-full text-lg'>
            Massive amounts of smartphone location data are quietly harvested
            through everyday apps and sold by data brokers, creating powerful
            tools that can track people’s movements with little oversight.
          </p>
          <p className='w-full text-lg'>
            This poses serious risks for anyone traveling to sensitive places
            like medical clinics, religious sites, or across borders, especially
            as shifting political climates embolden authorities to misuse such
            data.
          </p>
          <p className='w-full text-lg'>
            With regulation still weak and fragmented, the unregulated trade in
            location data has become a profound threat to privacy and civil
            liberties.
          </p>
        </div>

        {/* Block 2 */}
        <TextAndImageGrid />
      </div>

      <ol>
        {locationSecurityChecklist.map(item => (
          <div key={item.subject}>
            <li className='text-lg font-medium'>
              <h2>{item.subject}</h2>
            </li>
            <ul>
              {item.content.map(content => (
                <li key={content}>{content}</li>
              ))}
            </ul>
          </div>
        ))}
      </ol>
    </PageLayout>
  );
};

export default LocationTracking;
