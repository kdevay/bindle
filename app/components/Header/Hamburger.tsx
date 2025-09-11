'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Hamburger from 'hamburger-react';

interface HamburgerNavMenuProps {}

const HamburgerNavMenu: React.FC<HamburgerNavMenuProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/checkpoints', label: 'Checkpoints' },
    { href: '/location-sharing', label: 'Location Sharing' },
    { href: '/navigation-apps', label: 'Navigation Apps' },
  ];

  return (
    <div className='relative'>
      <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} />

      {isOpen && (
        <div className='absolute top-[68px] md:top-[58px] right-0 shadow-lg border z-50 bg-naturalLight min-w-48'>
          <nav className='flex flex-col p-4 gap-3'>
            {navLinks.map(link => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  className={`underline ${
                    isActive &&
                    'text-gray-400 cursor-not-allowed pointer-events-none'
                  }`}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-disabled={isActive}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerNavMenu;
