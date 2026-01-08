import { NavSlug } from '../utils/constants/routes';
import Footer from './Footer';
import Header from './Header';

interface PageLayoutProps {
  children: React.ReactNode;
  heading?: string | React.ReactNode;
  contentStyles?: string;
  currentPage: NavSlug;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  contentStyles,
  heading,
  currentPage,
}) => {
  return (
    <div className='flex justify-center items-center bg-natural'>
      <div className='font-sans flex flex-col min-h-screen w-full p-4 md:p-8 pt-0 md:pt-0 gap-8 lg:w-[1200px]'>
        <Header />
        <main className={`${contentStyles}`}>
          {heading && <h1 className='text-3xl font-bold'>{heading}</h1>}

          {children}
        </main>
        <Footer currentPage={currentPage} />
      </div>
    </div>
  );
};

export default PageLayout;
