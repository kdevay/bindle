'use client';
import Hero from '@/app/components/Hero';
import PageLayout from '@/app/components/PageLayout';
import travelRoutes, { TravelRoute } from '@/app/utils/constants/travelRoutes';
import Image from 'next/image';
import RouteCard from './RouteCard';
import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/app/components/input';

export default function Routes() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter routes based on search query
  const filteredRoutes = useMemo(() => {
    if (!searchQuery.trim()) {
      return travelRoutes;
    }

    const query = searchQuery.toLowerCase().trim();
    
    return travelRoutes.filter(route => {
      // Check if origin matches
      const originMatch = route.origin.toLowerCase().includes(query);
      
      // Check if any destination matches
      const destinationMatch = route.destinations.some(dest => 
        dest.destination.toLowerCase().includes(query)
      );
      
      return originMatch || destinationMatch;
    });
  }, [searchQuery]);

  return (
    <PageLayout currentPage='routes' contentStyles='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
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
      
      <div className='flex flex-col gap-4 my-2'>
        <p>
          The information listed on the bandana and this website are not intended to be a comprehensive list of routes or modes of travel. 
          Instead, the listed departure cities, destination cities, and travel modes offer a snapshot of the many ways people move—whether 
          to access healthcare, evacuate during storms or other climate emergencies, reunite with family, or seek safety and support.
        </p>
        
        <p>These routes were selected with the following considerations in mind:</p>
        <ul>
          <li>They reflect pathways people already use to access healthcare and essential services</li>
          <li>Travel needs and options vary widely; no single mode of travel works for everyone</li>
          <li>People may be traveling alone or with partners, children, or other chosen or biological family</li>
          <li>Risk, accessibility, and feasibility can differ based on factors such as citizenship status, age, disability, or personal circumstances</li>
        </ul>
        <p>
          For the safety and convenience of our users, we prioritized direct flights, Amtrak or bus routes with no more than 1 transfer, and driving routes under 12 hours. The driving routes largely reflect interstate travel, rather than highways or backroads. We would love to incorporate other modes of travel, other routes, and other departure and destination cities, and may do so in the future as needs arise.
        </p>
      </div>

      {/* Search Bar */}
      <div className='w-full'>
        <div className='relative'>
          <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 pointer-events-none' />
          <Input
            type='text'
            placeholder='Search origin or destination city...'
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            className='pl-10 pr-10 h-10 bg-white'
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors'
              aria-label='Clear search'
            >
              <X className='h-4 w-4' />
            </button>
          )}
        </div>
        
        {/* Show result count */}
        {(
          <p className='mt-2 text-sm font-medium pt-2'>
            Showing {filteredRoutes.length} {filteredRoutes.length === 1 ? 'result' : 'results'} 
          </p>
        )}
      </div>

      {/* Route Cards */}
      <div className='w-full flex flex-col gap-4'>
        {filteredRoutes.map((route: TravelRoute) => (
          <RouteCard key={route.origin} route={route} />
        ))}
      </div>

      {/* No results message */}
      {filteredRoutes.length === 0 && searchQuery && (
        <div className='w-full text-center pt-8 pb-20'>
          <p className='mb-2'>No routes found for "{searchQuery}"</p>
          <p className='text-sm'>Try searching for cities like Chicago, New Orleans, or Baltimore</p>
        </div>
      )}
    </PageLayout>
  );
}