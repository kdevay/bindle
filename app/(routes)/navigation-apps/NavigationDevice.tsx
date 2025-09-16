interface NavigationDeviceProps {
  device: {
    name: string;
    category: string;
    cost?: string;
    deviceCost?: string;
    mapsIncluded: string;
    extraFeatures: string[];
  };
}

const NavigationDevice: React.FC<NavigationDeviceProps> = ({ device }) => {
  return (
    <section>
      <h4 className='text-xl font-medium pt-4'>
        <strong>{device.name}</strong>
      </h4>
      <ul>
        <li>
          <strong>Device Cost:</strong> {device.cost || device.deviceCost}
        </li>

        <li>
          <strong>Maps Included:</strong> {device.mapsIncluded}
        </li>

        <li>
          <strong>Extra Features:</strong> {device.extraFeatures.join(', ')}
        </li>
      </ul>
    </section>
  );
};

export default NavigationDevice;
