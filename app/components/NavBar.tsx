import Link from 'next/link';
import navLinks, { NavSlug } from '../utils/constants/routes';
import { Fragment } from 'react';

interface NavBarProps {
  currentPage: NavSlug;
}

const NavBar: React.FC<NavBarProps> = ({ currentPage }) => {
  // Get the proper set of links based on the current page
  const links = navLinks.filter(link => link.slug !== currentPage);

  return (
    <nav className='border-y border-black border-dotted py-4 w-full hidden md:flex gap-2 items-center justify-center'>
      {links.map((link, index) => (
        <Fragment key={`${link.href}-mid-nav`}>
          <Link className='underline font-bold' href={link.href}>
            {link.label}
          </Link>
          {index < links.length - 1 && <p className='hidden md:block'>×</p>}
        </Fragment>
      ))}
    </nav>
  );
};

export default NavBar;
