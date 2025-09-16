import PageLayout from '@/app/components/PageLayout';
import {
  OpenSourceMaps,
  StandaloneGPSDevices,
  navigationApps,
  navigationDevices,
} from '@/app/utils/constants/navigationData';
import ProConTable from './ProConTable';
import NavigationApp from './NavigationApp';
import NavigationDevice from './NavigationDevice';

interface NavigationAppsProps {}

const NavigationApps: React.FC<NavigationAppsProps> = () => {
  return (
    <PageLayout
      heading='How to get around without being tracked'
      contentStyles='flex flex-col gap-4 items-start sm:items-start'
    >
      <p>
        The two most popular navigation apps, Google Maps and Apple Maps,
        collect extensive location data that creates a permanent record of your
        travels. Google uses your location data to create targeted advertising
        profiles based on your location history and sell ad placements. They
        also share aggregated/anonymized location data with 3rd parties
        (advertisers, data mining groups). Apple does not use location data for
        advertising, nor does it share location data with 3rd parties.
      </p>

      <p>
        The main concern, however, is that both companies are required share
        location data with law enforcement through legal requests (warrants,
        subpoenas). While Apple is more privacy-focused and resistant to
        requests, both companies ultimately comply with valid legal orders.
      </p>

      <div>
        <p>We can sidestep these concerns by:</p>
        <ul>
          <li>
            switching to an app that does not store/track our location data,{' '}
            <em>OR</em>
          </li>
          <li>using GPS hardware instead of our phones</li>
        </ul>
      </div>

      <h2 className='text-2xl font-bold pt-4'>{OpenSourceMaps.title}</h2>
      {OpenSourceMaps.description.map((description, index) => (
        <p key={index}>{description}</p>
      ))}

      <ProConTable pros={OpenSourceMaps.pros} cons={OpenSourceMaps.cons} />

      {navigationApps.map(app => (
        <NavigationApp key={app.name} app={app} />
      ))}

      <h2 className='text-2xl font-bold pt-4'>{StandaloneGPSDevices.title}</h2>
      <p>{StandaloneGPSDevices.description}</p>
      <ProConTable
        pros={StandaloneGPSDevices.pros}
        cons={StandaloneGPSDevices.cons}
      />

      {navigationDevices.map(device => (
        <NavigationDevice key={device.name} device={device} />
      ))}

      <h2 className='text-2xl font-bold pt-4'>Summary</h2>

      <p>
        For privacy-conscious navigation, offline apps like OsmAnd or Organic
        Maps offer the best balance of privacy and convenience. Standalone GPS
        devices provide maximum privacy at the cost of additional hardware and
        maintenance.
      </p>
    </PageLayout>
  );
};

export default NavigationApps;
