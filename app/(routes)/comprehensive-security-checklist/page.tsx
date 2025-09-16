'use client';
import PageLayout from '@/app/components/PageLayout';
import { useRef } from 'react';

interface ComprehensiveSecurityChecklistProps {}

const ComprehensiveSecurityChecklist: React.FC<
  ComprehensiveSecurityChecklistProps
> = () => {
  const sourcesRef = useRef<HTMLDivElement>(null);

  const scrollToSources = () => {
    sourcesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <PageLayout
      heading='Comprehensive Security Checklist'
      contentStyles='flex flex-col gap-4'
    >
      <p>
        This list is an attempt to consolidate best practices (outlined by
        credible security resources such as EFF and DDF) for digital security
        for devices, accounts, platforms, networks, finances, and emergency
        preparedness. All reference materials used in the creation of this
        checklist are listed in the Sources & Further Reading section below.
      </p>

      <section>
        <h2 className='text-xl md:text-2xl font-bold'>Devices</h2>
        <hr className='w-full border-1 border-black' />
        <div className='mb-2'>
          <h3 className='text-lg md:text-xl font-bold'>Smart Phones</h3>
          <ul>
            <li>Disable location services for apps that don't need it</li>
            <li>Turn off location history and tracking in system settings</li>
            <li>Disable biometric unlock (fingerprint/face unlock)</li>
            <li>Use a strong PIN or password instead of patterns</li>
            <li>
              Enable automatic screen lock with short timeout (1–2 minutes)
            </li>
            <li>Disable lock screen notifications or limit what's shown</li>
            <li>
              Turn off voice assistant on lock screen (Siri / Google Assistant)
            </li>
            <li>Disable automatic Wi‑Fi connection to open networks</li>
            <li>Turn off Bluetooth when not in use</li>
            <li>Regularly review and revoke app permissions</li>
          </ul>
        </div>

        <div className='mb-2'>
          <h3 className='text-lg md:text-xl font-bold'>Computers</h3>
          <ul>
            <li>
              Enable full disk encryption; This protects all the data on your
              computer's hard drive by scrambling it with a key that only you
              have. (
              <span>
                <a
                  className='font-medium underline hover:cursor'
                  href='https://support.apple.com/en-us/guide/mac-help/mh17159/mac'
                  target='_blank'
                  rel='noopener'
                >
                  FileVault for mac users
                </a>
              </span>
              ,{' '}
              <span>
                <a
                  className='font-medium underline hover:cursor'
                  href='https://www.veracrypt.fr/en/Home.html'
                  target='_blank'
                  rel='noopener'
                >
                  VeraCrypt for windows/linux users
                </a>
              </span>
              )
            </li>
            <li>Set up automatic screen lock with timeout</li>
            <li>
              Disable webcam/microphone when not needed (physical covers
              recommended)
            </li>
            <li>Turn off automatic login</li>
            <li>Enable firewall</li>
            <li>Disable unnecessary startup programs</li>
            <li>Install regular security updates and patches</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className='text-xl md:text-2xl font-bold'>Accounts</h2>
        <hr className='w-full border-1 border-black' />
        <div className='mb-2'>
          <h3 className='text-lg md:text-xl font-bold'>
            Passwords &amp; Authentication
          </h3>
          <ul>
            <li>Use unique, strong passwords for every account</li>
            <li>
              Use a{' '}
              <a
                className='font-medium underline hover:cursor'
                href='https://bitwarden.com/resources/zero-knowledge-encryption/'
              >
                zero-knowledge encrypted
              </a>{' '}
              password manager, such as{' '}
              <span>
                <a
                  className='font-medium underline hover:cursor'
                  href='https://bitwarden.com'
                  target='_blank'
                  rel='noopener'
                >
                  Bitwarden
                </a>
              </span>
            </li>
            <li>
              Enable two‑factor authentication (2FA) on all important accounts
            </li>
            <li>
              For 2FA, use authenticator apps over SMS (
              <a
                className='font-medium underline hover:cursor'
                href='https://www.authy.com/'
              >
                Authy
              </a>
              ,
              <a
                className='font-medium underline hover:cursor'
                href='https://1password.com/'
              >
                1Password
              </a>
              , etc.)
            </li>
            <li>Regularly audit and delete unused accounts</li>
            <li>
              Check if your email has appeared in data breaches:{' '}
              <span>
                <a
                  className='font-medium underline hover:cursor'
                  href='https://haveibeenpwned.com'
                  target='_blank'
                  rel='noopener'
                >
                  Have I Been Pwned
                </a>
              </span>
            </li>
          </ul>
        </div>

        <div className='mb-2'>
          <h3 className='text-lg md:text-xl font-bold'>Email</h3>
          <ul>
            <li>
              Consider encrypted email providers, such as{' '}
              <span>
                <a
                  className='font-medium underline hover:cursor'
                  href='https://proton.me/mail'
                  target='_blank'
                  rel='noopener'
                >
                  Proton Mail
                </a>
              </span>
              , or{' '}
              <span>
                <a
                  className='font-medium underline hover:cursor'
                  href='https://tutanota.com'
                  target='_blank'
                  rel='noopener'
                >
                  Tutanota
                </a>
              </span>
            </li>
            <li>Enable 2FA on email accounts</li>
            <li>Be cautious when forwarding emails</li>
            <li>
              Regularly delete emails containing sensitive info from inbox and
              archive
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className='text-xl md:text-2xl font-bold'>
          Platforms &amp; Services
        </h2>
        <hr className='w-full border-1 border-black' />
        <div className='mb-2'>
          <h3 className='text-lg md:text-xl font-bold'>Communication</h3>
          <ul>
            <li>
              Use encrypted messaging apps for sensitive conversations, such as{' '}
              <span>
                <a
                  className='font-medium underline hover:cursor'
                  href='https://signal.org'
                  target='_blank'
                  rel='noopener'
                >
                  Signal
                </a>
              </span>
              , or{' '}
              <span>
                <a
                  className='font-medium underline hover:cursor'
                  href='https://wire.com'
                  target='_blank'
                  rel='noopener'
                >
                  Wire
                </a>
              </span>
            </li>
            <li>
              Avoid storing sensitive conversations in cloud‑synced apps (such
              as iMessage)
            </li>
          </ul>
        </div>

        <div className='mb-2'>
          <h3 className='text-lg md:text-xl font-bold'>Web Browsing</h3>
          <ul>
            <li>
              Use privacy‑focused browsers (
              <span>
                <a
                  className='font-medium underline hover:cursor'
                  href='https://www.mozilla.org/firefox/'
                  target='_blank'
                  rel='noopener'
                >
                  Firefox
                </a>
              </span>{' '}
              or{' '}
              <span>
                <a
                  className='font-medium underline hover:cursor'
                  href='https://brave.com'
                  target='_blank'
                  rel='noopener'
                >
                  Brave
                </a>
              </span>
              )
            </li>
            <li>
              Install privacy extensions, such as{' '}
              <span>
                <a
                  className='font-medium underline hover:cursor'
                  href='https://github.com/gorhill/uBlock'
                  target='_blank'
                  rel='noopener'
                >
                  uBlock Origin
                </a>
              </span>
              ,{' '}
              <span>
                <a
                  className='font-medium underline hover:cursor'
                  href='https://privacybadger.org'
                  target='_blank'
                  rel='noopener'
                >
                  Privacy Badger
                </a>
              </span>
            </li>
            <li>
              Use search engines that don't track you or sell your data, such as{' '}
              <span>
                <a
                  className='font-medium underline hover:cursor'
                  href='https://duckduckgo.com'
                  target='_blank'
                  rel='noopener'
                >
                  DuckDuckGo
                </a>
              </span>
              , or{' '}
              <span>
                <a
                  className='font-medium underline hover:cursor'
                  href='https://www.startpage.com'
                  target='_blank'
                  rel='noopener'
                >
                  Startpage
                </a>
              </span>
            </li>
            <li>
              Browse with a VPN, especially on untrusted networks{' '}
              <span>
                <a
                  className='font-medium underline hover:cursor'
                  href='https://mullvad.net'
                  target='_blank'
                  rel='noopener'
                >
                  Mullvad
                </a>
              </span>
              ,{' '}
              <span>
                <a
                  className='font-medium underline hover:cursor'
                  href='https://proton.me/vpn'
                  target='_blank'
                  rel='noopener'
                >
                  ProtonVPN
                </a>
              </span>
            </li>
            <li>
              Clear cookies and browsing data regularly (most browsers have a
              setting you can apply which will auto-delete cookies when the
              browser closes)
            </li>
            <li>
              Disable third‑party cookies (activate this in browser settings)
            </li>
            <li>
              Use private/incognito mode for ephemeral searches (note: this is
              not a replacement for a privacy browser, but it wont store
              cookies, save your history, or collect any autocomplete data)
            </li>
          </ul>
        </div>

        <div className='mb-2'>
          <h3 className='text-lg md:text-xl font-bold'>Cloud Storage</h3>
          <ul>
            <li>
              Use end‑to‑end encrypted cloud storage options, such as{' '}
              <span>
                <a
                  className='font-medium underline hover:cursor'
                  href='https://www.pcloud.com/crypto.html'
                  target='_blank'
                  rel='noopener'
                >
                  pCloud Crypto
                </a>
              </span>
              ,{' '}
              <span>
                <a
                  className='font-medium underline hover:cursor'
                  href='https://tresorit.com'
                  target='_blank'
                  rel='noopener'
                >
                  Tresorit
                </a>
              </span>
              ,{' '}
              <span>
                <a
                  className='font-medium underline hover:cursor'
                  href='https://proton.me/drive'
                  target='_blank'
                  rel='noopener'
                >
                  Proton Drive
                </a>
              </span>
            </li>
            <li>Regularly audit what's stored in cloud accounts</li>
          </ul>
        </div>

        <div className='mb-2'>
          <h3 className='text-lg md:text-xl font-bold'>Social Media</h3>
          <ul>
            <li>Make profiles private</li>
            <li>Use different usernames across platforms</li>
            <li>
              Minimize the amount of personal details you add to your profile
            </li>
            <li>Disable location tagging in posts</li>
            <li>Turn off facial recognition and face‑mapping features</li>
            <li>
              Don't use face-mapping features (filters such as the ones that add
              makeup or change your facial appearance)
            </li>
            <li>
              Opt out of people‑finder/data broker sites — examples:{' '}
              <span>
                <a
                  className='font-medium underline hover:cursor'
                  href='https://www.whitepages.com'
                  target='_blank'
                  rel='noopener'
                >
                  Whitepages
                </a>
              </span>
              ,{' '}
              <span>
                <a
                  className='font-medium underline hover:cursor'
                  href='https://www.spokeo.com'
                  target='_blank'
                  rel='noopener'
                >
                  Spokeo
                </a>
              </span>
            </li>
            <li>
              Disable ad personalization and third‑party data sharing on
              platforms
            </li>
            <li>Download and review platform data regularly</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className='text-xl md:text-2xl font-bold'>Network Security</h2>
        <hr className='w-full border-1 border-black' />
        <div className='mb-2'>
          <h3 className='text-lg md:text-xl font-bold'>Home</h3>
          <ul>
            <li>Change default router password and admin credentials</li>
            <li>
              Use{' '}
              <span>
                <a
                  className='font-medium underline hover:cursor'
                  href='https://en.wikipedia.org/wiki/Wi-Fi_Protected_Access#WPA3'
                  target='_blank'
                  rel='noopener'
                >
                  WPA3
                </a>
              </span>{' '}
              (or WPA2 if WPA3 unavailable). WPA3/WPA2 are WiFi security
              protocols that encrypt the data traveling between your devices and
              your router. They're what keep folks from easily snooping on your
              internet traffic.
              <ul>
                <li>
                  <a
                    className='font-medium underline hover:cursor'
                    href='https://support.apple.com/en-us/102766'
                  >
                    guide
                  </a>
                  for mac users
                </li>
                <li>
                  <a
                    className='font-medium underline hover:cursor'
                    href='https://support.microsoft.com/en-us/windows/faster-and-more-secure-wi-fi-in-windows-26177a28-38ed-1a8e-7eca-66f24dc63f09'
                  >
                    guide
                  </a>
                  for windows users
                </li>
              </ul>
            </li>
            <li>
              Set up a guest network for visitors. This might be over kill for
              most folks. However, some of the benefits are:
              <ul>
                <li>
                  Guests can't see or access your personal devices, files, or
                  smart home stuff
                </li>
                <li>
                  If a guest device has malware or gets hacked, it can't spread
                  to your main network
                </li>
              </ul>
            </li>
            <li>
              Check and install router firmware updates from your router
              manufacturer regularly (or enable automatic updates if available)
            </li>
            <li>
              Consider mesh routers with built‑in security features (more
              expensive, might be overkill depending on your needs)
            </li>
          </ul>
        </div>

        <div className='mb-2'>
          <h3 className='text-lg md:text-xl font-bold'>Public Wi‑Fi</h3>
          <ul>
            <li>Always use a VPN on public networks</li>
            <li>Avoid accessing sensitive accounts on public Wi‑Fi</li>
            <li>
              Turn off automatic Wi‑Fi connection and forget public networks
              after use
            </li>
            <li>Use mobile hotspot when possible instead of public Wi‑Fi</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className='text-xl md:text-2xl font-bold'>Financial Security</h2>
        <hr className='w-full border-1 border-black' />
        <div className='mb-2'>
          <ul>
            <li>Use cash or prepaid cards for sensitive purchases</li>
            <li>
              Use your bank's official app for online banking instead of a
              browser when possible
            </li>
            <li>
              Set up account alerts for all transactions (or for transactions
              over a certain amount)
            </li>
            <li>
              Use virtual/temporary card numbers for online shopping to obscure
              your credit card info from the vendor, and prevent the purchase
              from appearing on your main credit card statement{' '}
              <ul>
                <li>
                  might be available for free with your bank, but there are
                  subscription services you can use like{' '}
                  <a
                    className='font-medium underline hover:cursor'
                    href='https://privacy.com'
                    target='_blank'
                    rel='noopener'
                  >
                    Privacy.com
                  </a>
                </li>
              </ul>
            </li>
            <li>
              Avoid saving payment methods in browsers or websites; Instead, use
              password‑protected autofill services like{' '}
              <a
                className='font-medium underline hover:cursor'
                href='https://bitwarden.com'
                target='_blank'
                rel='noopener'
              >
                Bitwarden
              </a>
              .
            </li>
            <li>
              Monitor credit reports regularly and freeze credit when not
              applying for new accounts
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className='text-xl md:text-2xl font-bold'>
          Emergency Preparedness
        </h2>
        <hr className='w-full border-1 border-black' />
        <div className='mb-2'>
          <h3 className='text-lg md:text-xl font-bold'>Data Protection</h3>
          <ul>
            <li>Maintain offline backups of critical data</li>
            <li>Store backup recovery codes in a secure physical location</li>
            <li>Document emergency contacts and account recovery methods</li>
            <li>Create a digital estate plan for important accounts</li>
            <li>Test backup and recovery procedures periodically</li>
          </ul>
        </div>
        <div className='mb-2'>
          <h3 className='text-lg md:text-xl font-bold'>Identity Protection</h3>
          <ul>
            <li>
              Know how to quickly freeze credit and contact banks if needed
            </li>
            <li>
              Have contact information for banks and credit card companies
            </li>
            <li>Keep copies of important documents in secure location</li>
            <li>Know steps to take if accounts are compromised</li>
          </ul>
        </div>
      </section>

      <p>
        Note: this checklist is a practical, high‑level guide. Adjust measures
        based on your individual threat model and operational needs.
      </p>

      <section ref={sourcesRef}>
        <h2 className='text-xl md:text-2xl font-bold'>
          Sources &amp; Further Reading
        </h2>
        <hr className='w-full border-1 border-black' />
        <ul>
          <li>
            <a
              href='https://www.eff.org/deeplinks/2022/05/how-disable-ad-id-tracking-ios-and-android-and-why-you-should-do-it-now'
              target='_blank'
              rel='noopener'
            >
              EFF — How to Disable Ad ID Tracking on iOS and Android
            </a>
          </li>
          <li>
            <a
              href='https://www.eff.org/deeplinks/2022/08/how-ad-tech-became-cop-spy-tech'
              target='_blank'
              rel='noopener'
            >
              EFF — How Ad Tech Became Cop Spy Tech
            </a>
          </li>
          <li>
            <a
              href='https://www.eff.org/deeplinks/2023/11/debunking-myth-anonymous-data'
              target='_blank'
              rel='noopener'
            >
              EFF — Debunking the Myth of ‘Anonymous’ Data
            </a>
          </li>
          <li>
            <a
              href='https://digitaldefensefund.org'
              target='_blank'
              rel='noopener'
            >
              Digital Defense Fund — Digital Security Guides
            </a>
          </li>
          <li>
            <a
              href='https://arxiv.org/abs/2204.03556'
              target='_blank'
              rel='noopener'
            >
              Academic Study — Goodbye Tracking? Impact of iOS App Tracking
              Transparency
            </a>
          </li>
          <li>
            <a
              href='https://arxiv.org/abs/2407.14938'
              target='_blank'
              rel='noopener'
            >
              Academic Study — From Ad Identifiers to Global Privacy Control
            </a>
          </li>
          <li>
            <a
              href='https://www.cs.cornell.edu/~shmat/shmat_ndss16.pdf'
              target='_blank'
              rel='noopener'
            >
              Cornell Research — What Mobile Ads Know About Mobile Users
            </a>
          </li>
        </ul>
      </section>
    </PageLayout>
  );
};

export default ComprehensiveSecurityChecklist;
