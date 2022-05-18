import Button from '../Button';

interface StartProps {
  className?: string;
}

const Start: React.FC<StartProps> = () => {
  return (
    <Button className="mr-1" iconURL="images/Windows logo (without text).ico">
      Start
    </Button>
  );
};

export default Start;
