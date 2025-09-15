import PageLayout from '@/app/components/PageLayout';
import locationSecurityChecklist from '@/app/utils/data/locationSecurityChecklist';

interface LocationTrackingProps {}

const LocationTracking: React.FC<LocationTrackingProps> = () => {
  return (
    <PageLayout contentStyles='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
      <h2 className='text-2xl font-bold'>
        Why should I care about location tracking?
      </h2>

      <p>
        Massive amounts of smartphone location data are quietly harvested
        through everyday apps and sold by data brokers, creating powerful tools
        that can track people’s movements with little oversight. This poses
        serious risks for anyone traveling to sensitive places like medical
        clinics, religious sites, or across borders, especially as shifting
        political climates embolden authorities to misuse such data. With
        regulation still weak and fragmented, the unregulated trade in location
        data has become a profound threat to privacy and civil liberties. We
        have collected a few tips from{' '}
        <a
          className='underline font-medium'
          href='https://www.404media.co/inside-the-u-s-government-bought-tool-that-can-track-phones-at-abortion-clinics/'
        >
          EFF
        </a>
        to help you protect your location privacy. For more information, check
        out{' '}
        <a
          className='underline font-medium'
          href='https://www.404media.co/inside-the-u-s-government-bought-tool-that-can-track-phones-at-abortion-clinics/'
        >
          this article
        </a>{' '}
        from EFF. For a more exhaustive list, check out our{' '}
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
