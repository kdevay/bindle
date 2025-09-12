import PageLayout from '@/app/components/PageLayout';

interface LocationTrackingProps {}

const LocationTracking: React.FC<LocationTrackingProps> = () => {
  return (
    <PageLayout contentStyles='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
      <h2 className='text-2xl font-bold'>
        Why should I care about location tracking?
      </h2>

      <p>
        EFF: Creators of This Police Location Tracking Tool Aren’t Vetting
        Buyers. Here’s How To Protect Yourself{' '}
        <a href='https://www.404media.co/inside-the-u-s-government-bought-tool-that-can-track-phones-at-abortion-clinics/'>
          404 Media
        </a>
        , along with&nbsp;
        <a href='https://www.haaretz.co.il/news/security/2024-10-24/ty-article-magazine/.premium/00000192-b90c-dc97-a593-f96f50800000'>
          Haaretz
        </a>
        ,&nbsp;
        <a href='https://www.notus.org/technology/cell-phone-tracking-law-enforcement-abortion-clinic'>
          Notus
        </a>
        , and&nbsp;
        <a href='https://krebsonsecurity.com/2024/10/the-global-surveillance-free-for-all-in-mobile-ad-data/'>
          Krebs On Security
        </a>
        &nbsp;recently&nbsp;reported on a company that captures smartphone
        location data from a variety of sources and collates that data into an
        easy-to-use tool to track devices’ (and, by proxy, individuals’)
        locations. The dangers that this tool presents are especially grave for
        those traveling to or from out-of-state&nbsp;
        <a href='https://www.ftc.gov/news-events/news/press-releases/2022/08/ftc-sues-kochava-selling-data-tracks-people-reproductive-health-clinics-places-worship-other'>
          reproductive health clinics
        </a>
        ,&nbsp;
        <a href='https://www.vice.com/en/article/us-military-location-data-xmode-locate-x/'>
          places of worship
        </a>
        , and&nbsp;
        <a href='https://www.theverge.com/2022/5/10/23065080/ice-surveillance-dragnet-data-brokers-georgetown-law'>
          the border
        </a>
        .
      </p>

      <p>
        The tool, called Locate X, is run by a company called Babel Street.
        Locate X is designed for law enforcement, but an investigator working
        with&nbsp;<a href='https://www.atlas.net/'>Atlas Privacy</a>, a data
        removal service, was able to gain access to Locate X by simply asserting
        that they planned to work with law enforcement in the future.
      </p>

      <p>
        With an incoming administration adversarial to those most at risk from
        location tracking using tools like Locate X, the time is ripe to bolster
        our digital defenses. Now more than ever, attorneys general in states
        hostile to reproductive choice will be emboldened to use every tool at
        their disposal to incriminate those exerting their bodily autonomy.
        Locate X is a powerful tool they can use to do this. So here are some
        timely tips to help protect your location privacy.
      </p>

      <p>
        First, a short disclaimer: these tips provide some level of protection
        to mobile device-based tracking. This is not an exhaustive list of
        techniques, devices, or technologies that can help restore one’s
        location privacy. Your&nbsp;
        <a href='https://ssd.eff.org/module/your-security-plan'>
          security plan
        </a>{' '}
        should reflect how specifically
        <a href='https://en.wikipedia.org/wiki/Targeted_surveillance'>
          &nbsp;targeted you are for surveillance
        </a>
        . Additional steps, such as researching and mitigating the on-board
        devices included with your&nbsp;
        <a href='https://privacy4cars.com/'>car</a>, or sweeping for&nbsp;
        <a href='https://robots.net/technology-and-innovation/iot-and-smart-devices/detective-work-a-guide-on-locating-and-identifying-gps-trackers-on-cars/'>
          physical GPS trackers
        </a>
        , may be prudent steps which are outside the scope of this post.
        Likewise, more advanced techniques such as flashing your device with a
        custom-built&nbsp;<a href='https://calyxos.org/'>privacy-</a>
        &nbsp;or&nbsp;<a href='https://grapheneos.org/'>security-focused</a>
        &nbsp;operating system may provide additional protections which are not
        covered here. The intent is to give some basic tips for protecting
        yourself from mobile device location tracking services.
      </p>

      <p>
        For information about how choose a secure navigation app{' '}
        <a href='https://katdevay1-kltco.wordpress.com/secure-navigation-apps/'>
          check out our article here
        </a>
        .
      </p>

      <h2 className='text-2xl font-bold'>
        <strong>Disable Mobile Advertising Identifiers</strong>
      </h2>

      <p>
        Services like Locate X are built atop an online advertising ecosystem
        that incentivizes collecting troves of information from your device and
        delivering it to platforms to micro-target you with ads based on your
        online behavior. One linchpin in the way distinct information (in this
        case, location) delivered to an app or website at a certain point in
        time is connected to information delivered to a different app or website
        at the next point in time is through unique identifiers such as the
        mobile advertising identifiers (MAIDs). Essentially, MAIDs allow
        advertising platforms and the data brokers they sell to to “connect the
        dots” between an otherwise disconnected scatter plot of points on a map,
        resulting in a cohesive picture of the movement of a device through
        space and time.
      </p>

      <p>
        As a result of significant push-back by privacy advocates, both Android
        and iOS provided ways to disable advertising identifiers from being
        delivered to third-parties. As we&nbsp;
        <a href='https://www.eff.org/deeplinks/2024/09/how-stop-advertisers-tracking-your-teen-across-internet'>
          described in a recent post
        </a>
        , you can do this on Android following these steps:
      </p>

      <p>And on iOS:</p>

      <h2 className='text-2xl font-bold'>
        <strong>Audit Your Apps’ Trackers and Permissions</strong>
      </h2>

      <p>
        In general, the more apps you have, the more intractable your digital
        footprint becomes. A separate app you’ve downloaded for flashlight
        functionality may also come pre-packaged with trackers delivering your
        sensitive details to third-parties. That’s why it’s advisable to limit
        the amount of apps you download and instead use your pre-existing apps
        or operating system to, say, find the bathroom light switch at night. It
        isn’t just good for your privacy: any new app you download also
        increases your “attack surface,” or the possible paths hackers might
        have to compromise your device.
      </p>

      <p>
        We get it though. Some apps you just can’t live without. For these, you
        can at least audit what trackers the app communicates with and what
        permissions it asks for. Both Android and iOS have a page in their
        Settings apps where you can review permissions you’ve granted apps. Not
        all of these are only “on” or “off.” Some, like photos, location, and
        contacts, offer more nuanced permissions. It’s worth going through each
        of these to make sure you still want that app to have that permission.
        If not, revoke or dial back the permission. To get to these pages:
      </p>

      <p>
        On Android: Open&nbsp;
        <em>
          <strong>
            Settings &gt; Privacy &amp; Security &gt; Privacy Controls &gt;
            Permission Manager
          </strong>
        </em>
        .&nbsp;
      </p>

      <p>
        On iPhone: Open&nbsp;
        <em>
          <strong>Settings &gt; Privacy &amp; Security</strong>
        </em>
        .
      </p>

      <p>
        If you’re inclined to do so, there are tricks for further research. For
        example, you can look up tracks in Android apps using an excellent
        service called&nbsp;
        <a href='https://exodus-privacy.eu.org/'>Exodus Privacy</a>. As of iOS
        15, you can check on the device itself by turning on the system-level
        app privacy report in&nbsp;
        <em>
          <strong>Settings &gt; Privacy &gt; App Privacy Report</strong>
        </em>
        . From that point on, browsing to that menu will allow you to see
        exactly what permissions an app uses, how often it uses them, and what
        domains it communicates with. You can investigate any given domain by
        just pasting it into a search engine and seeing what’s been reported on
        it. Pro tip: to exclude results from that domain itself and only include
        what other domains say about it, many search engines like Google allow
        you to use the syntax&nbsp;
      </p>

      <p>-site:www.example.com</p>

      <p></p>

      <h2 className='text-2xl font-bold'>
        <strong>Disable Real-Time Tracking with Airplane Mode</strong>
      </h2>

      <p>
        To prevent an app from having network connectivity and sending out your
        location in real-time, you can put your phone into airplane mode.
        Although it won’t prevent an app from storing your location and
        delivering it to a tracker sometime later, most apps (even those filled
        with trackers) won’t bother with this extra complication. It is
        important to keep in mind that this will also prevent you from reaching
        out to friends and using most apps and services that you depend on.
        Because of these trade-offs, you likely will not want to keep Airplane
        Mode enabled all the time, but it may be useful when you are traveling
        to a particularly sensitive location.
      </p>

      <p>
        Some apps are designed to allow you to navigate even in airplane mode.
        Tapping your profile picture in Google Maps will drop down a menu
        with&nbsp;<strong>Offline maps</strong>. Tapping this will allow you to
        draw a boundary box and pre-download an entire region, which you can do
        even without connectivity. As of iOS 18, you can do this on Apple Maps
        too: tap your profile picture, then “Offline Maps,” and “Download New
        Map.”
      </p>

      <p>
        Other apps, such as&nbsp;
        <a href='https://organicmaps.app/'>Organic Maps</a>, allow you to
        download large maps in advance. Since GPS itself determines your
        location passively (no transmissions need be sent, only received),
        connectivity is not needed for your device to determine its location and
        keep it updated on a map stored locally.
      </p>

      <p>
        Keep in mind that you don’t need to be in airplane mode the entire time
        you’re navigating to a sensitive site. One strategy is to navigate to
        some place&nbsp;<em>near</em>&nbsp;your sensitive endpoint, then switch
        airplane mode on, and use offline maps for the last leg of the journey.
      </p>

      <p></p>

      <h2 className='text-2xl font-bold'>
        <strong>Separate Devices for Separate Purposes</strong>
      </h2>

      <p>
        Finally, you may want to bring a separate, clean device with you when
        you’re traveling to a sensitive location. We know this isn’t an option
        available to everyone. Not everyone can afford purchasing a separate
        device just for those times they may have heightened privacy concerns.
        If possible, though, this can provide some level of protection.
      </p>

      <p>
        A separate device doesn’t necessarily mean a separate data plan:
        navigating offline as described in the previous step may bring you to a
        place you know Wi-Fi is available. It also means any persistent
        identifiers (such as the MAID described above) are different for this
        device, along with different device characteristics which won’t be tied
        to your normal personal smartphone. Going through this phone and keeping
        its apps, permissions, and browsing to an absolute minimum will avoid an
        instance where that random sketchy game you have kill time sends your
        location to its servers every 10 seconds.
      </p>

      <p>
        One good (though more onerous) practice that would remove any persistent
        identifiers like long-lasting cookies or MAIDs is resetting your
        purpose-specific smartphone to factory settings after each visit to a
        sensitive location. Just remember to re-download your offline maps and
        increase your privacy settings afterwards.
      </p>

      <h2 className='text-2xl font-bold'>
        <strong>Further Reading</strong>
      </h2>

      <p>
        Our own&nbsp;
        <a href='https://ssd.eff.org/'>Surveillance Self-Defense</a>&nbsp;site
        and&nbsp;<a href='https://digitaldefensefund.org/learn'>many</a>
        <a href='https://securityplanner.consumerreports.org/'>&nbsp;other</a>
        <a href='https://www.securityeducationcompanion.org/'>
          &nbsp;resources
        </a>
        , are available to provide more guidance in protecting your digital
        privacy.
      </p>

      <p>
        The underlying situation that makes invasive tools like Locate X
        possible is the online advertising industry, which incentivizes a
        massive siphoning of user data to micro-target audiences. Earlier this
        year, the FTC showed&nbsp;
        <a href='https://www.eff.org/deeplinks/2024/01/ftc-bars-x-mode-selling-sensitive-location-data'>
          some
        </a>
        <a href='https://www.ftc.gov/news-events/news/press-releases/2024/01/ftc-order-will-ban-inmarket-selling-precise-consumer-location-data'>
          &nbsp;appetite
        </a>{' '}
        to pursue enforcement action against companies brokering the mobile
        location data of users. We applauded this enforcement, and hope it will
        continue into the next administration.
      </p>

      <p>
        Unfortunately, regulatory authorities only have the legal authority and
        resources to prosecute the most clear-cut and serious violations of
        consumer data. Borderline cases or novel practices that haven’t been
        clearly established as violations are harder to prosecute successfully.
        A piecemeal solution is limited in its ability to protect citizens from
        the vast array of data brokers and advertising services profiting off of
        surveilling us all.
      </p>

      <p>
        Only&nbsp;
        <a href='https://www.eff.org/deeplinks/2024/04/americans-deserve-more-current-american-privacy-rights-act'>
          a federal privacy law
        </a>{' '}
        which allows individuals to sue companies that broker their data and
        does not preempt states from enacting additional privacy protections
        will be strong enough to curb data broker surveillance. In the meantime,
        consumers are left to their own devices (pun not intended) in order to
        protect their most sensitive data, such as location. It’s up to us to
        protect ourselves, so let’s make it happen!
      </p>
    </PageLayout>
  );
};

export default LocationTracking;
