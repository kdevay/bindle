import Link from 'next/link';
import navLinks, { NavSlug } from '../../utils/constants/routes';
import { cn } from '@/lib/utils';

interface FooterProps {
  currentPage: NavSlug;
}

const Footer: React.FC<FooterProps> =  ({ currentPage }) => {
  // Exclude current page from nav links
  const links = navLinks.filter(link => link.slug !== currentPage);

  return (
    <footer className='border-t border-dotted py-4 w-full sticky bottom-0 z-20'>
      <nav className='flex flex-col gap-2 items-start justify-between'>
        {links.map(link => (
          <Link
            className={cn(
              'font-bold',
              link.slug === currentPage ? 
              'text-gray-400 cursor-not-allowed pointer-events-none' : 
              'underline'
            )}
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

export default Footer;
