import Header from './Header';

interface PageLayoutProps {
  children: React.ReactNode;
  contentStyles?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, contentStyles }) => {
  return (
    <div className='overscroll-none min-h-screen w-full flex justify-center items-start bg-natural'>
      <div className='font-sans flex flex-col min-h-screen min-w-screen p-4 md:p-8 pt-0 md:pt-0 gap-8 max-w-[1200px]'>
        <Header />
        <main className={`${contentStyles}`}>{children}</main>
      </div>
    </div>
  );
};

export default PageLayout;
