import PageLayout from '@/app/components/PageLayout';

interface NavigationAppsProps {}

const NavigationApps: React.FC<NavigationAppsProps> = () => {
  return (
    <PageLayout contentStyles='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
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

      <p>We can sidestep these concerns by:</p>

      <ul>
        <li>
          switching to an app that does not store/track our location data,{' '}
          <em>OR</em>
        </li>

        <li>using GPS hardware instead of our phones</li>
      </ul>

      <p></p>

      <h2 className='text-2xl font-bold'>Open Source Maps</h2>

      <p>
        <strong>Open source </strong>software is licensed as free to use,
        modify, and distribute, which ensures the technology remains freely
        accessible to the public. One of the main benefits of using open source
        technology is that it can be audited by anyone, including independent
        security researchers and privacy advocates, so you don’t have to trust a
        company’s claims about what their software actually does.
      </p>

      <figure>
        <table>
          <tbody>
            <tr>
              <td>Pro</td>
              <td>Con</td>
            </tr>
            <tr>
              <td>Store maps locally on your device</td>
              <td>No real-time traffic updates, since it is offline</td>
            </tr>
            <tr>
              <td>No location data collection or sharing</td>
              <td>Map updates are manual &amp; less frequent</td>
            </tr>
            <tr>
              <td>Works completely offline</td>
              <td>Address search may be less intuitive</td>
            </tr>
            <tr>
              <td>Uses crowd-sourced data from OpenStreetMap</td>
              <td>Limited business information (hours, reviews, etc.)</td>
            </tr>
          </tbody>
        </table>
      </figure>

      <p></p>

      <h3 className='text-2xl font-bold'>
        {' '}
        Here’s a breakdown of our favorite open source map apps:
      </h3>

      <p>
        <a href='https://osmand.net/'>
          <strong>OpenStreetMap</strong>
        </a>
      </p>

      <p>
        OpenStreetMap (aka OSM or OsmAnd) is a crowd-sourced mapping project
        powered by volunteers worldwide who collaborate to create and maintain a
        comprehensive, open-source geographic database.
      </p>

      <p>
        OSM collects data on stationary objects rather than it’s users. There is
        an large and growing collection of mapped objects from broad items such
        as infrastructure and international boundaries to hyperlocal details
        like shops and park benches.
      </p>

      <ul>
        <li>
          <strong>Pros:</strong> tons of navigation features (lane assistance,
          speed warnings, multiple routing profiles), 7 free map downloads
          (regions/countries), paid version is buy once own forever ($10-15 and
          gives you unlimited map downloads)
        </li>

        <li>
          <strong>Cons:</strong> complex interface can be overwhelming and hard
          to use initially
        </li>

        <li>
          <a href='https://osmand.net/'>Click here to download OsmAnd</a>
        </li>

        <li></li>
      </ul>

      <p>
        <strong>
          <a href='https://organicmaps.app/'>Organic Maps</a>
        </strong>
      </p>

      <p>
        Organic maps are helpful for <em>all</em> commuters, not just drivers —
        their maps include cycling routes, hiking trails, contour lines,
        elevation profiles, all available with turn-by-turn navigation and voice
        guidance.
      </p>

      <p>
        Organic Maps uses map data from OpenStreetMap and is designed to
        function without internet connectivity. It also includes an in-app
        editor that works offline and allows users to contribute updates and
        edits to OpenStreetMap.{' '}
      </p>

      <ul>
        <li>
          <strong>Pros:</strong> very user-friendly interface
        </li>

        <li>
          <strong>Cons:</strong> less granular control over the interface
          (compared to OSM)
        </li>

        <li>
          <a href='https://organicmaps.app/'>
            Click here to download Organic Maps
          </a>
        </li>
      </ul>

      <p></p>

      <h2 className='text-2xl font-bold'>Standalone GPS Devices</h2>

      <figure>
        <table>
          <tbody>
            <tr>
              <td>Pro</td>
              <td>Con</td>
            </tr>
            <tr>
              <td>Cannot be tracked since there’s no data connection</td>
              <td>Up-front cost is high ($100-300+)</td>
            </tr>
            <tr>
              <td>Always works without draining phone battery</td>
              <td>Map updates can take 2-6 hours to complete</td>
            </tr>
            <tr>
              <td>Reliable offline navigation with dedicated hardware</td>
              <td>Another device to maintain and charge</td>
            </tr>
            <tr>
              <td></td>
              <td>Less current business/POI information</td>
            </tr>
            <tr>
              <td></td>
              <td>
                Limited device storage, may require purchasing micro SD for
                extra storage (conversely, the apps above use less storage as
                their files are more efficiently compressed)
              </td>
            </tr>
          </tbody>
        </table>
      </figure>

      <h3 className='text-2xl font-bold'>
        <strong>Garmin DriveSmart 55</strong>
      </h3>

      <ul>
        <li>
          <strong>Cost: </strong>$200-250, free lifetime map updates
        </li>

        <li>
          <strong>Maps Included:</strong> US/Canada or Europe
        </li>

        <li>
          <strong>Extra Features:</strong> Voice control, Amazon Alexa,
          hands-free calling
        </li>
      </ul>

      <h3 className='text-2xl font-bold'>
        <strong>TomTom GO Comfort 5″</strong>
      </h3>

      <ul>
        <li>
          <strong>Device Cost:</strong> $120-220, Free lifetime map updates
        </li>

        <li>
          <strong>Maps Included:</strong> North America or Europe
        </li>

        <li>
          <strong>Extra Features:</strong> Bluetooth, smartphone integration
        </li>
      </ul>

      <h2 className='text-2xl font-bold'>Summary</h2>

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
