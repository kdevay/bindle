import React from 'react';

interface HeroProps {
  title: string;
  imageElement: React.ReactElement;
}

const Hero: React.FC<HeroProps> = ({ title, imageElement }) => {
  return (
    <div className='relative flex flex-col w-full h-[208px] md:h-[260px] overflow-hidden'>
      <h1 className='relative z-10 text-3xl font-bold w-fit'>{title}</h1>
      <div className='absolute inset-0 w-[110%] md:w-full h-full overflow-hidden flex items-center justify-center'>
        {imageElement}
      </div>
    </div>
  );
};

export default Hero;
