interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <>
      <div className='hidden md:flex flex-col gap-4 md:gap-8'>
        <p>
          Welcome to Bindle, a digital companion to the travel bandanna. Our aim
          is to help folks travel safely through a world of increasing
          surveillance, boundaries, and checkpoints.
        </p>
        <p>
          A bindle is a portable pack made by tying belongings in a bandanna or
          spare piece of cloth, commonly associated with American migrant
          workers and during the Great Depression.
        </p>
        <p>
          Just like our namesake, Bindle is a place for gathering resources to
          help us move with care: where to expect scrutiny, how to protect your
          digital self, and which routes keep us safest by plane, train, or car.
        </p>
      </div>
      <div className='flex md:hidden flex-col gap-4'>
        <p>
          Welcome to Bindle. Our aim is to help folks travel safely through a
          world of increasing surveillance by gathering resources to help us
          move with care.
        </p>
        <p>
          Here you can find information about where to expect scrutiny, how to
          protect your digital self, and which routes keep us safest by plane,
          train, or car.
        </p>
      </div>
    </>
  );
};

export default About;
