const OpenSourceMaps = {
  title: 'Open Source Maps',
  description: [
    "Open source software is licensed as free to use, modify, and distribute, which ensures the technology remains freely accessible to the public. One of the main benefits of using open source technology is that it can be audited by anyone, including independent security researchers and privacy advocates, so you don't have to trust a company's claims about what their software actually does.",
    "While open source maps are vital for privacy, they do have a few drawbacks compared to the mainstream map apps. Below we'll go over the pros and cons of open source maps, followed by a breakdown of our favorite open source map apps.",
  ],
  pros: [
    'Store maps locally on your device',
    'No location data collection or sharing',
    'Works completely offline',
    'Uses crowd-sourced data from OpenStreetMap',
  ],
  cons: [
    'No real-time traffic updates, since it is offline',
    'Map updates are manual & less frequent',
    'Address search may be less intuitive',
    'Limited business information (hours, reviews, etc.)',
  ],
};

const StandaloneGPSDevices = {
  title: 'Standalone GPS Devices',
  description:
    'Standalone GPS devices are a great way to navigate without being tracked. They are not connected to the internet and do not collect or share your location data. They are also more reliable than mainstream map apps since they are not dependent on wifi or cellular data to function.',
  pros: [
    "Cannot be tracked since there's no data connection",
    'Always works without draining phone battery',
    'Reliable offline navigation with dedicated hardware',
  ],
  cons: [
    'Up-front cost is high ($100-300+)',
    'Map updates can take 2-6 hours to complete',
    'Another device to maintain and charge',
    'Less current business/POI information',
    'Limited device storage, may require purchasing micro SD for extra storage (conversely, the apps above use less storage as their files are more efficiently compressed)',
  ],
};

const navigationApps = [
  {
    name: 'OpenStreetMap (OsmAnd)',
    category: 'Open Source Maps',
    url: 'https://osmand.net/',
    description: [
      ` OpenStreetMap (aka OSM or OsmAnd) is a crowd-sourced mapping project
        powered by volunteers worldwide who collaborate to create and maintain a
        comprehensive, open-source geographic database.`,
      `OSM collects data on stationary objects rather than it’s users. There is
        an large and growing collection of mapped objects from broad items such
        as infrastructure and international boundaries to hyperlocal details
        like shops and park benches.`,
    ],
    pros: [
      'tons of navigation features (lane assistance, speed warnings, multiple routing profiles)',
      '7 free map downloads (regions/countries)',
      'paid version is buy once own forever ($10-15 and gives you unlimited map downloads)',
    ],
    cons: ['complex interface can be overwhelming and hard to use initially'],
    downloadUrl: 'https://osmand.net/',
  },
  {
    name: 'Organic Maps',
    category: 'Open Source Maps',
    url: 'https://organicmaps.app/',
    description: [
      `Organic maps are helpful for all commuters, not just drivers —
        their maps include cycling routes, hiking trails, contour lines,
        elevation profiles, all available with turn-by-turn navigation and voice
        guidance.`,
      `Organic Maps uses map data from OpenStreetMap and is designed to
        function without internet connectivity. It also includes an in-app
        editor that works offline and allows users to contribute updates and
        edits to OpenStreetMap.`,
    ],
    pros: ['very user-friendly interface'],
    cons: ['less granular control over the interface (compared to OSM)'],
    downloadUrl: 'https://organicmaps.app/',
  },
];

const navigationDevices = [
  {
    name: 'Garmin DriveSmart 55',
    category: 'Standalone GPS Devices',
    cost: '$200-250, free lifetime map updates',
    mapsIncluded: 'US/Canada or Europe',
    extraFeatures: ['Voice control', 'Amazon Alexa', 'hands-free calling'],
  },
  {
    name: 'TomTom GO Comfort 5″',
    category: 'Standalone GPS Devices',
    deviceCost: '$120-220, Free lifetime map updates',
    mapsIncluded: 'North America or Europe',
    extraFeatures: ['Bluetooth', 'smartphone integration'],
  },
];

export {
  OpenSourceMaps,
  StandaloneGPSDevices,
  navigationApps,
  navigationDevices,
};
