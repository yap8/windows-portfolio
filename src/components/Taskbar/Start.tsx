import Button from '../Button';

interface StartProps {
  className?: string;
}

const Start: React.FC<StartProps> = ({ className }) => {
  return <Button className="mr-1">Start</Button>;
};

export default Start;
