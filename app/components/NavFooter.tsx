import Link from 'next/link';
import navLinks, { NavSlug } from '../utils/constants/routes';

interface NavFooterProps {
  currentPage: NavSlug;
}

const NavFooter: React.FC<NavFooterProps> = ({ currentPage }) => {
  // Exclude current page from nav links
  const links = navLinks.filter(link => link.slug !== currentPage);

  return (
    <footer className='border-t border-dotted  md:hidden py-4 w-full'>
      <nav className='flex flex-col gap-2 items-start justify-between'>
        {links.map(link => (
          <Link
            className='underline font-bold'
            href={link.href}
            key={`${link.href}-footer`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default NavFooter;
