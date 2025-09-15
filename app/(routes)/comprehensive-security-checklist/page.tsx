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
    <PageLayout>
      <h1>Comprehensive Security Checklist</h1>
      <p>
        This list is an attempt to consolidate best practices (outlined by
        credible security resources such as EFF and DDF) for digital security
        for devices, accounts, platforms, networks, finances, and emergency
        preparedness. All reference materials used in the creation of this
        checklist are listed in the Sources & Further Reading section below.
      </p>

      <section>
        <h2>Devices — Mobile</h2>
        <ul>
          <li>Disable location services for apps that don't need it</li>
          <li>Turn off location history and tracking in system settings</li>
          <li>Disable biometric unlock (fingerprint/face unlock)</li>
          <li>Use a strong PIN or password instead of patterns</li>
          <li>Enable automatic screen lock with short timeout (1–2 minutes)</li>
          <li>Disable lock screen notifications or limit what's shown</li>
          <li>
            Turn off voice assistant on lock screen (Siri / Google Assistant)
          </li>
          <li>Disable automatic Wi‑Fi connection to open networks</li>
          <li>Turn off Bluetooth when not in use</li>
          <li>Regularly review and revoke app permissions</li>
        </ul>
      </section>

      <section>
        <h2>Devices — Computers</h2>
        <ul>
          <li>
            Enable full disk encryption —{' '}
            <span>
              <a
                href='https://support.apple.com/en-us/guide/mac-help/mh17159/mac'
                target='_blank'
                rel='noopener'
              >
                FileVault (macOS)
              </a>
            </span>
            ,{' '}
            <span>
              <a
                href='https://www.veracrypt.fr/en/Home.html'
                target='_blank'
                rel='noopener'
              >
                VeraCrypt
              </a>{' '}
              (Windows/Linux)
            </span>
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
      </section>

      <section>
        <h2>Accounts — Passwords &amp; Authentication</h2>
        <ul>
          <li>Use unique, strong passwords for every account</li>
          <li>
            Use a password manager —{' '}
            <span>
              <a href='https://bitwarden.com' target='_blank' rel='noopener'>
                Bitwarden
              </a>
            </span>
          </li>
          <li>
            Enable two‑factor authentication (2FA) on all important accounts;
            prefer authenticator apps over SMS
          </li>
          <li>Regularly audit and delete unused accounts</li>
          <li>
            Check if your email appears in breaches:{' '}
            <span>
              <a
                href='https://haveibeenpwned.com'
                target='_blank'
                rel='noopener'
              >
                Have I Been Pwned
              </a>
            </span>
          </li>
        </ul>
      </section>

      <section>
        <h2>Accounts — Email Security</h2>
        <ul>
          <li>
            Consider encrypted email providers —{' '}
            <span>
              <a href='https://proton.me/mail' target='_blank' rel='noopener'>
                Proton Mail
              </a>
            </span>
            ,{' '}
            <span>
              <a href='https://tutanota.com' target='_blank' rel='noopener'>
                Tutanota
              </a>
            </span>
          </li>
          <li>Enable 2FA on email accounts</li>
          <li>Be cautious when forwarding emails</li>
          <li>Regularly clean out old emails containing sensitive info</li>
        </ul>
      </section>

      <section>
        <h2>Platforms &amp; Services — Communication</h2>
        <ul>
          <li>
            Use private messaging apps for sensitive conversations —{' '}
            <span>
              <a href='https://signal.org' target='_blank' rel='noopener'>
                Signal
              </a>
            </span>
            ,{' '}
            <span>
              <a href='https://wire.com' target='_blank' rel='noopener'>
                Wire
              </a>
            </span>
          </li>
          <li>Avoid storing sensitive conversations in cloud‑synced apps</li>
        </ul>
      </section>

      <section>
        <h2>Web Browsing</h2>
        <ul>
          <li>
            Use privacy‑focused browsers —{' '}
            <span>
              <a
                href='https://www.mozilla.org/firefox/'
                target='_blank'
                rel='noopener'
              >
                Firefox
              </a>
            </span>{' '}
            or{' '}
            <span>
              <a href='https://brave.com' target='_blank' rel='noopener'>
                Brave
              </a>
            </span>
          </li>
          <li>
            Install privacy extensions —{' '}
            <span>
              <a
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
                href='https://privacybadger.org'
                target='_blank'
                rel='noopener'
              >
                Privacy Badger
              </a>
            </span>
          </li>
          <li>
            Use private search engines —{' '}
            <span>
              <a href='https://duckduckgo.com' target='_blank' rel='noopener'>
                DuckDuckGo
              </a>
            </span>
            ,{' '}
            <span>
              <a
                href='https://www.startpage.com'
                target='_blank'
                rel='noopener'
              >
                Startpage
              </a>
            </span>
          </li>
          <li>
            Use a VPN on untrusted networks —{' '}
            <span>
              <a href='https://mullvad.net' target='_blank' rel='noopener'>
                Mullvad
              </a>
            </span>
            ,{' '}
            <span>
              <a href='https://proton.me/vpn' target='_blank' rel='noopener'>
                ProtonVPN
              </a>
            </span>
          </li>
          <li>
            Clear cookies and browsing data regularly; disable third‑party
            cookies
          </li>
          <li>
            Use private/incognito mode for ephemeral searches (note: not a
            replacement for a privacy browser)
          </li>
        </ul>
      </section>

      <section>
        <h2>Cloud Storage</h2>
        <ul>
          <li>
            Use end‑to‑end encrypted cloud storage options —{' '}
            <span>
              <a
                href='https://www.pcloud.com/crypto.html'
                target='_blank'
                rel='noopener'
              >
                pCloud Crypto
              </a>
            </span>
            ,{' '}
            <span>
              <a href='https://tresorit.com' target='_blank' rel='noopener'>
                Tresorit
              </a>
            </span>
            ,{' '}
            <span>
              <a href='https://proton.me/drive' target='_blank' rel='noopener'>
                Proton Drive
              </a>
            </span>
          </li>
          <li>Regularly audit what's stored in cloud accounts</li>
        </ul>
      </section>

      <section>
        <h2>Social Media</h2>
        <ul>
          <li>Make profiles private and minimize personal info</li>
          <li>Disable location tagging in posts</li>
          <li>
            Turn off facial recognition and face‑mapping features where possible
          </li>
          <li>
            Opt out of people‑finder/data broker sites — examples:{' '}
            <span>
              <a
                href='https://www.whitepages.com'
                target='_blank'
                rel='noopener'
              >
                Whitepages
              </a>
            </span>
            ,{' '}
            <span>
              <a href='https://www.spokeo.com' target='_blank' rel='noopener'>
                Spokeo
              </a>
            </span>
          </li>
          <li>
            Disable ad personalization and third‑party data sharing on platforms
          </li>
          <li>Download and review platform data regularly</li>
        </ul>
      </section>

      <section>
        <h2>Network Security — Home</h2>
        <ul>
          <li>Change default router password and admin credentials</li>
          <li>
            Use{' '}
            <span>
              <a
                href='https://en.wikipedia.org/wiki/Wi-Fi_Protected_Access#WPA3'
                target='_blank'
                rel='noopener'
              >
                WPA3
              </a>
            </span>{' '}
            (or WPA2 if WPA3 unavailable)
          </li>
          <li>Set up a guest network for visitors</li>
          <li>Check and install router firmware updates regularly</li>
          <li>
            Consider mesh routers with built‑in security features for larger
            homes
          </li>
        </ul>
      </section>

      <section>
        <h2>Network Security — Public Wi‑Fi</h2>
        <ul>
          <li>Always use a VPN on public networks</li>
          <li>Avoid accessing sensitive accounts on public Wi‑Fi</li>
          <li>
            Turn off automatic Wi‑Fi connection and forget public networks after
            use
          </li>
          <li>Use mobile hotspot when possible instead of public Wi‑Fi</li>
        </ul>
      </section>

      <section>
        <h2>Financial Security</h2>
        <ul>
          <li>Prefer cash or prepaid cards for sensitive purchases</li>
          <li>Use your bank's official app for online banking when possible</li>
          <li>Set up account alerts for all transactions</li>
          <li>
            Use virtual/temporary card numbers for online shopping —{' '}
            <span>
              <a href='https://privacy.com' target='_blank' rel='noopener'>
                Privacy.com
              </a>
            </span>
          </li>
          <li>
            Avoid saving payment methods in browsers or websites; use
            password‑protected autofill (Bitwarden)
          </li>
          <li>
            Monitor credit reports regularly and freeze credit when not applying
            for new accounts
          </li>
        </ul>
      </section>

      <section>
        <h2>Emergency Preparedness</h2>
        <ul>
          <li>Maintain offline backups of critical data</li>
          <li>Store backup recovery codes in a secure physical location</li>
          <li>Document emergency contacts and account recovery methods</li>
          <li>Create a digital estate plan for important accounts</li>
          <li>Test backup and recovery procedures periodically</li>
          <li>Know how to quickly freeze credit and contact banks if needed</li>
        </ul>
      </section>

      <p>
        Note: this checklist is a practical, high‑level guide. Adjust measures
        based on your individual threat model and operational needs.
      </p>

      <section ref={sourcesRef}>
        <h2>Sources &amp; Further Reading</h2>
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
