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
    <footer className='border-t flex justify-between border-black pt-6 pb-4 w-full mt-2 z-20'>
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
      <div className='flex flex-col w-[300px]'>
        <h1 className='text-2xl md:text-3xl font-bold pb-2 text-right'>Bindle</h1>
        <div className='flex flex-col gap-2'>
          <p>
          This site and the travel bandanna are a volunteer-driven project.
          </p>
          <p>
            All code is open source and available on <Link href='https://github.com/kdevay/bindle' className='underline font-bold'>GitHub</Link>.
          </p>
          <p>
            We welcome contributions and feedback.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
