import Hero from '@/app/components/Hero';
import PageLayout from '@/app/components/PageLayout';
import travelRoutes, { TravelRoute } from '@/app/utils/constants/travelRoutes';
import Image from 'next/image';
import RouteCard from './RouteCard';

export default function Routes() {
  return (
    <PageLayout contentStyles='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
      <Hero
        title='Suggested Travel Routes'
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
      <div>
        <p>
        For the safety and convenience of our users, we only included routes which met the following criteria:
      </p>
      <ul>
        <li>Greyhound routes with one or zero (1-0) transfers</li>
        <li>Direct flights</li>
        <li>Driving routes of less than 12 hours</li>
      </ul>
      </div>
      {travelRoutes.map((route: TravelRoute) => (
        <RouteCard key={route.origin} route={route} />
      ))}
    </PageLayout>
  );
}