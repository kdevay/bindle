import { Button } from './button';

interface CloseButtonProps {
  onClick: () => void;
  containerName: string;
}

const CloseButton: React.FC<CloseButtonProps> = ({
  onClick,
  containerName,
}) => {
  return (
    <Button
      className='text-2xl hover:font-bold'
      variant='ghost'
      onClick={onClick}
      aria-label={`Close ${containerName}`}
      type='button'
    >
      ×
    </Button>
  );
};

export default CloseButton;
