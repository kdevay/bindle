import Link from 'next/link';
import HamburgerNavMenu from './Hamburger';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className='flex w-full justify-between items-center border-b'>
      <div className='flex flex-col'>
        <Link href='/'>
          <h1 className='text-5xl font-bold'>Bindle</h1>
          <p className='text-sm italic'>
            a digital companion to the travel bandanna
          </p>
        </Link>
      </div>
      <HamburgerNavMenu />
    </header>
  );
};

export default Header;
