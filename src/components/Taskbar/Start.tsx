import Button from '../Button';
import StartMenu from './StartMenu';

interface StartProps {
  className?: string;
}

const Start: React.FC<StartProps> = () => {
  return (
    <div className="mr-1">
      <StartMenu active={true} />
      <Button iconURL="images/Windows logo (without text).ico" active={true}>
        Start
      </Button>
    </div>
  );
};

export default Start;
