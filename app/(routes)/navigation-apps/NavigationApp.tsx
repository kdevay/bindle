interface NavigationAppProps {
  app: {
    name: string;
    description: string[];
    pros: string[];
    cons: string[];
    downloadUrl: string;
  };
}

const NavigationApp: React.FC<NavigationAppProps> = ({ app }) => {
  return (
    <section>
      <h4>
        <a
          className='text-xl font-bold underline hover:cursor'
          href='https://osmand.net/'
        >
          {app.name}
        </a>
      </h4>

      <div className='flex flex-col gap-2'>
        {app.description.map((description, index) => (
          <p key={index}>{description}</p>
        ))}

        <ul className='m-2'>
          <li>
            <strong>Pros:</strong> {app.pros.join(', ')}
          </li>
          <li>
            <strong>Cons:</strong> {app.cons.join(', ')}
          </li>
        </ul>

        <a
          className='font-medium underline hover:cursor'
          href={app.downloadUrl}
        >
          Click here to download {app.name}
        </a>
      </div>
    </section>
  );
};

export default NavigationApp;
