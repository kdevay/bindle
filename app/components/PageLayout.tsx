import Header from './Header';

interface PageLayoutProps {
  children: React.ReactNode;
  heading?: string | React.ReactNode;
  contentStyles?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  contentStyles,
  heading,
}) => {
  return (
    <div className='flex justify-center items-center bg-natural'>
      <div className='font-sans flex flex-col min-h-screen min-w-screen p-4 md:p-8 pt-0 md:pt-0 gap-8 max-w-[1200px]'>
        <Header />
        <main className={`${contentStyles}`}>
          {heading && <h1 className='text-3xl font-bold'>{heading}</h1>}

          {children}
        </main>
      </div>
    </div>
  );
};

export default PageLayout;
