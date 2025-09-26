import PageLayout from '@/app/components/PageLayout';
import Image from 'next/image';
import locationSecurityChecklist from '@/app/utils/constants/locationSecurityChecklist';

interface LocationTrackingProps {}

const LocationTracking: React.FC<LocationTrackingProps> = () => {
  return (
    <PageLayout
      heading='Why should I care about location tracking?'
      contentStyles='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'
    >
      <div className='flex flex-col md:flex-row gap-4 w-full'>
        <Image
          className='w-full md:w-auto md:h-[300px]'
          src='/suneyemap2.png'
          alt='Sunmap'
          width={774}
          height={574}
        />
        {/* <div className='w-full md:w-1/2 bg-black' /> */}
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
      </div>
      <h2 className='text-2xl font-bold'>
        So what can you do to protect your privacy?
      </h2>
      <p className='w-full text-lg'>
        Our favorite source for digital security is the Electronic Frontier
        Foundation (EFF). We have collected a few tips below from{' '}
        <a
          className='underline font-medium'
          href='https://www.404media.co/inside-the-u-s-government-bought-tool-that-can-track-phones-at-abortion-clinics/'
        >
          this EFF article
        </a>{' '}
        to help you protect your location privacy. For a more exhaustive list,
        check out our{' '}
        <a
          className='underline font-medium'
          href='/comprehensive-security-checklist'
        >
          Comprehensive Security Checklist
        </a>
        .
      </p>
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
