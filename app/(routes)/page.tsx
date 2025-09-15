import Link from 'next/link';
import PageLayout from '../components/PageLayout';
import About from '../components/About';
import NavBar from '../components/NavBar';
import NavFooter from '../components/NavFooter';

export default function Home() {
  return (
    <PageLayout contentStyles='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
      <About />
      <NavBar currentPage='home' />

      <div className='flex flex-col gap-4'>
        <h2 className='text-2xl font-bold'>Need a travel bandanna?</h2>
        <p>
          As a grassroots, volunteer-driven project, we don't have the resources
          for large-scale printing and shipping. Instead, we're sharing our
          design for you to print! Download the design [HERE] and bring it to
          your local print shop. If you can't find a shop nearby, check out
          these online printers below:
        </p>
        <ul>
          <li>
            <Link
              className='underline font-bold'
              href='https://www.4imprint.com/'
            >
              4imprint
            </Link>
            - B-Corp certified company with sustainability initiatives and fair
            labor practices
          </li>
          <li>
            <Link
              className='underline font-bold'
              href='https://www.customink.com/'
            >
              CustomInk
            </Link>
            - Offers eco-friendly printing options and has corporate
            responsibility programs
          </li>
          <li>
            <Link
              className='underline font-bold'
              href='https://www.printful.com/'
            >
              PrintFul
            </Link>
            - Print-on-demand service that partners with ethical manufacturers
            and offers organic/sustainable fabric options
          </li>
          <li>
            <Link
              className='underline font-bold'
              href='https://pineprintshop.com/pages/bandana-printing'
            >
              Pine Print Shop
            </Link>
            - A sustainable screen printing shop that specializes in water-based
            inks and offers 100% Made in USA cotton bandanas
          </li>
        </ul>
      </div>
      <NavFooter currentPage='home' />
    </PageLayout>
  );
}
