export type Destination = {
  destination: string,
  modes: {
    amtrak: boolean | string,
    greyhound: boolean,
    driving: boolean,
    directFlight: boolean
  },
  notes?: string,
};
export type TravelRoute = {
  origin: string,
  destinations: Destination[]
};

const travelRoutes: TravelRoute[] = [
  // New Orleans
  {
    origin: 'New Orleans, LA',
  destinations:[
    {
      destination: 'Chicago, IL',
      modes: {
        amtrak: 'City of New Orleans',
        greyhound: true,
        driving: true,
        directFlight: true,
      },
    },
    {
      destination: 'College Park, MD',
        modes: { 
          amtrak: 'Crescent', 
          greyhound: false, 
          driving: true, 
          directFlight: false 
        },
        notes: 'Nearest airport/Amtrak station is Baltimore, 1 hour drive.',
      },
      {
        destination: 'Cherry Hill, NJ',
        modes: { 
          amtrak: 'Crescent', 
          greyhound: false, 
          driving: false, 
          directFlight: true 
        },
        notes: 'Nearest airport/Amtrak station is Philadelphia, 24 min drive.'
      },
      {
        destination: 'Bethesda, MD',
          modes: { 
            amtrak: 'Crescent', 
            greyhound: false, 
            driving: true, 
            directFlight: false 
          },
          notes: 'Nearest airport/Amtrak station is Baltimore, 1 hour drive.',
      },
      {
        destination: 'Carbondale, IL',
        modes: { 
          amtrak: 'City of New Orleans', 
          greyhound: false, 
          driving: true, 
          directFlight: false 
        },
      },
      {
        destination: 'Champaign, IL',
        modes: { 
          amtrak: 'City of New Orleans', 
          greyhound: false, 
          driving: true, 
          directFlight: false 
        },
      },
      {
        destination: 'Baltimore, MD',
        modes: { 
          amtrak: 'Crescent', 
          greyhound: true, 
          driving: true, 
          directFlight: false 
        },
      },
      {
        destination: 'Washington, DC',
        modes: { 
          amtrak: 'Crescent', 
          greyhound: true, 
          driving: true, 
          directFlight: false 
        },
      },
      {
        destination: 'Las Cruces, NM',
        modes: { 
          amtrak: false, 
          greyhound: true, 
          driving: true, 
          directFlight: false 
        },
      },
        
      {
        destination: 'Albuquerque, NM',
        modes: { 
          amtrak: false, 
          greyhound: false, 
          driving: true, 
          directFlight: true 
        },
      },
      {
        destination: 'New York City, NY',
        modes: { 
          amtrak: 'Crescent', 
          greyhound: false, 
          driving: false, 
          directFlight: true 
        },
      },
      {
        destination: 'Charlotte, NC',
        modes: { 
          amtrak: 'Crescent', 
          greyhound: true, 
          driving: true, 
          directFlight: true 
        },
      },
      {
        destination: 'Los Angeles, CA',
        modes: { 
          amtrak: 'Sunset Limited', 
          greyhound: false, 
          driving: false, 
          directFlight: true 
        },
      },
    ],
  },

  // Atlanta
  {
    origin: 'Atlanta, GA',
    destinations: [
      {
        destination: 'Carbondale, IL',
        modes: { 
          amtrak: false, 
          greyhound: true, 
          driving: true, 
          directFlight: false 
        },
      },
      {
        destination: 'Granite City, IL',
        modes: { 
          amtrak: false, 
          greyhound: true, 
          driving: false, 
          directFlight: true 
        },
        notes: 'Nearest airport/Amtrak station is St. Louis, MO. 18 min drive.',
      },
      {
        destination: 'Chicago, IL',
        modes: { 
          amtrak: false, 
          greyhound: true, 
          driving: false, 
          directFlight: true 
        },
      },
      {
        destination: 'Cherry Hill, NJ',
        modes: { 
          amtrak: 'Crescent', 
          greyhound: false, 
          driving: false, 
          directFlight: true 
        },
        notes: 'Nearest airport/Amtrak station is Philadelphia, 24 min drive.',
      },
      {
        destination: 'New York City, NY',
        modes: { 
          amtrak: false, 
          greyhound: false, 
          driving: false, 
          directFlight: true 
        },
      },
    ],
  },
  

  // Houston
  {
    origin: 'Houston, TX',
    destinations: [
      {
        destination: 'Las Cruces, NM',
        modes: { 
          amtrak: false, 
          greyhound: true, 
          driving: true, 
          directFlight: true 
        }
      },
      {
    destination: 'Albuquerque, NM',
    modes: { 
      amtrak: false, 
      greyhound: false, 
      driving: true, 
      directFlight: true 
    },
  },
  {
    destination: 'Wichita, KS',
    modes: { 
      amtrak: false, 
      greyhound: true, 
      driving: true, 
      directFlight: true 
    },
  },
  {
    destination: 'Las Vegas, NV',
    modes: { 
      amtrak: false, 
      greyhound: false, 
      driving: false, 
      directFlight: true 
    },
  },
  {
    destination: 'Los Angeles, CA',
    modes: { 
      amtrak: 'Sunset Limited', 
      greyhound: true, 
      driving: false, 
      directFlight: true 
    },
  },
    ]
  },
  

  // Dallas
  {
    origin: 'Dallas, TX',
    destinations: [
      {
        destination: 'Granite City, IL',
        modes: { 
          amtrak: 'Texas Eagle', 
          greyhound: false, 
          driving: true, 
          directFlight: true 
        },
        notes: 'Nearest airport/Amtrak station is St. Louis, MO. 18 min drive.',
      },
{
    destination: 'Chicago, IL',
    modes: { 
      amtrak: 'Texas Eagle', 
      greyhound: true, 
      driving: false, 
      directFlight: true 
    },
  },
  {
    destination: 'Wichita, KS',
    modes: { 
      amtrak: false, 
      greyhound: true, 
      driving: true, 
      directFlight: true 
    },
  },
  {
    destination: 'Los Angeles, CA',
    modes: { 
      amtrak: false, 
      greyhound: true, 
      driving: false, 
      directFlight: true 
    },
  },
  {
    destination: 'Albuquerque, NM',
    modes: { 
      amtrak: false, 
      greyhound: true, 
      driving: false, 
      directFlight: true 
    },
  },
    ],
  },
  

  // Tampa
  {
    origin: 'Tampa, FL',
    destinations: [
      {
        destination: 'Baltimore, MD',
        modes: { 
          amtrak: false, 
          greyhound: true, 
          driving: false, 
          directFlight: true 
        },
      },
      {
        destination: 'Cherry Hill, NJ',
        modes: { 
          amtrak: false, 
          greyhound: false, 
          driving: false, 
          directFlight: true 
        },
        notes: 'Nearest airport/Amtrak station is Philadelphia, 24 min drive.',
      },
      {
        destination: 'New York City, NY',
        modes: { 
          amtrak: false, 
          greyhound: false, 
          driving: false, 
          directFlight: true 
        },
      },
      {
        destination: 'Washington, DC',
        modes: { 
          amtrak: false, 
          greyhound: true, 
          driving: false, 
          directFlight: true 
        },
      },
      {
        destination: 'Charlotte, NC',
        modes: { 
          amtrak: false, 
          greyhound: false, 
          driving: true, 
          directFlight: true 
        },
      },
      {
        destination: 'Raleigh, NC',
        modes: { 
          amtrak: false, 
          greyhound: true, 
          driving: true, 
          directFlight: true 
        },
      },
      {
        destination: 'Richmond, VA',
        modes: { 
          amtrak: false, 
          greyhound: true, 
          driving: false, 
          directFlight: true 
        },
      },
    ],
  },

// Orlando 
  {
    origin: 'Orlando, FL',
    destinations: [
      {
        destination: 'Washington, DC',
        modes: { 
          amtrak: 'Silver Meteor', 
          greyhound: true, 
          driving: false, 
          directFlight: true 
        },
      },
      {
        destination: 'Baltimore, MD',
        modes: { 
          amtrak: 'Silver Meteor', 
          greyhound: true, 
          driving: false, 
          directFlight: true 
        },
      },
      {
        destination: 'New York City, NY',
        modes: { 
          amtrak: 'Silver Meteor', 
          greyhound: false, 
          driving: false, 
          directFlight: true 
        },
      },
    ]
  },
  
]

export default travelRoutes;
