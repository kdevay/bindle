import Image from 'next/image';

interface TextAndImageGridProps {}

const TextAndImageGrid: React.FC<TextAndImageGridProps> = () => {
  return (
    <>
      <div className='flex md:flex-row flex-col gap-4 w-full mt-4'>
        <h2 className='text-3xl font-bold -mb-4 md:hidden'>
          So, what can you do to protect your privacy?
        </h2>
        <Image
          className='w-full mx-auto md:mx-0 md:max-w-none max-w-[300px] md:h-[200px] md:w-auto lg:h-[330px] lg:object-contain'
          src='/suneyemap.png'
          alt='Sunmap'
          width={774}
          height={574}
        />
        <div className='flex flex-col gap-4'>
          <h2 className='hidden md:block text-3xl font-bold mt-4'>
            So, what can you do to protect your privacy?
          </h2>
          <p className='w-full text-lg'>
            Our favorite source for digital security is the{' '}
            <a
              className='underline font-medium'
              href='https://www.eff.org'
              target='_blank'
              rel='noopener'
            >
              Electronic Frontier Foundation (EFF)
            </a>
            , a nonprofit organization that's been defending digital rights and
            privacy since 1990.
          </p>
          <p className='w-full text-lg hidden lg:block'>
            During this time, they successfully challenged government
            surveillance programs, fought against censorship, defended
            encryption, and pushed back against corporate overreach.
          </p>
          <p className='w-full text-lg hidden xl:block'>
            We have collected a few tips below from{' '}
            <a
              className='underline font-medium'
              href='https://www.404media.co/inside-the-u-s-government-bought-tool-that-can-track-phones-at-abortion-clinics/'
              target='_blank'
              rel='noopener'
            >
              this EFF article
            </a>{' '}
            to help you protect your location privacy. For a more exhaustive
            list, check out our{' '}
            <a
              className='underline font-medium'
              href='/comprehensive-security-checklist'
            >
              Comprehensive Security Checklist
            </a>
            .
          </p>
        </div>
      </div>
      <p className='w-full text-lg md:block lg:hidden hidden'>
        During this time, they successfully challenged government surveillance
        programs, fought against censorship, defended encryption, and pushed
        back against corporate overreach.
      </p>
      <p className='w-full text-lg md:block xl:hidden hidden'>
        We have collected a few tips below from{' '}
        <a
          className='underline font-medium'
          href='https://www.404media.co/inside-the-u-s-government-bought-tool-that-can-track-phones-at-abortion-clinics/'
          target='_blank'
          rel='noopener'
        >
          this EFF article
        </a>{' '}
        to help you protect your location privacy. For a more exhaustive list,
        check out our{' '}
        <a
          className='underline font-medium'
          href='/comprehensive-security-checklist'
        >
          Comprehensive Security Checklist
        </a>
        .
      </p>
    </>
  );
};

export default TextAndImageGrid;
