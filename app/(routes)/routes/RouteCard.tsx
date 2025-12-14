'use client';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/app/components/collapsible';
import type { TravelRoute } from '@/app/utils/constants/travelRoutes';
import {
  TrainTrack,
  Bus,
  Car,
  Plane,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface RouteCardProps {
  route: TravelRoute;
}

const RouteCard: React.FC<RouteCardProps> = ({ route }) => {
  return (
    <article className="w-full border border-gray bg-white rounded-md flex flex-col gap-2 p-2 lg:p-4 lg:gap-4">
      <h3 className="text-lg font-medium">
        <span className="font-bold">Origin city:&nbsp;&nbsp;</span>{route.origin}
      </h3>


      <div className="flex flex-col divide-y">
      <p className="tracking-wider pl-2">Destinations</p>
        {route.destinations.map((destination, index) => (
            <Collapsible key={destination.destination + index}>
            <CollapsibleTrigger asChild>
              <button
                type="button"
                className="flex hover:cursor-pointer w-full px-2 items-center justify-between py-3 text-left hover:bg-gray-100"
              >
                <h4 className="font-medium">
                  {destination.destination}
                </h4>

                <div className="flex gap-2 text-lg ml-3 w-fit">
                  <Bus className={cn('h-5', destination.modes.greyhound ? 'text-gray-600' : 'text-gray-300')}/>
                  <Car className={cn('h-5', destination.modes.driving ? 'text-gray-600' : 'text-gray-300')}/>
                  <TrainTrack className={cn('h-5', destination.modes.amtrak ? 'text-gray-600' : 'text-gray-300')}/>
                  <Plane className={cn('h-5', destination.modes.directFlight ? 'text-gray-600' : 'text-gray-300')}/>
                </div>
              </button>
            </CollapsibleTrigger>

            <CollapsibleContent className="pl-2 pb-3 text-sm space-y-1">
              {destination.modes.amtrak && (
                <div className='flex gap-2 w-fit'><TrainTrack className='h-5' /> {destination.modes.amtrak} Train</div>
              )}
              {destination.modes.greyhound && <div className='flex gap-2 w-fit'> <Bus className='h-5' /> Greyhound</div>}
              {destination.modes.driving && <div className='flex gap-2 w-fit'> <Car className='h-5' /> Drive</div>}
              {destination.modes.directFlight && <div className='flex gap-2 w-fit'> <Plane className='h-5' /> Direct flight</div>}
              {destination.notes && (
                <p className="text-gray-600 italic font-medium mt-2">{destination.notes}</p>
              )}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </article>
  );
};

export default RouteCard;