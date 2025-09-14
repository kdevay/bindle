import Link from 'next/link';
import HamburgerNavMenu from './Hamburger';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className='sticky md:static top-0 z-20 py-2 md:py-4 bg-natural flex w-full justify-between items-center border-b'>
      <div className='flex flex-col'>
        <Link href='/'>
          <h1 className='text-4xl md:text-5xl font-bold'>Bindle</h1>
          <p className='hidden md:block text-sm italic'>
            a digital companion to the travel bandanna
          </p>
        </Link>
      </div>
      <HamburgerNavMenu />
    </header>
  );
};

export default Header;
