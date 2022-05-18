import { observer } from 'mobx-react-lite';

import start from '../../store/start';
import Button from '../Button';
import StartMenu from './StartMenu';

interface StartProps {
  className?: string;
}

const Start: React.FC<StartProps> = observer(() => {
  const handleOpen = () => {
    start.open();
  };

  const handleClose = () => {
    start.close();
  };

  return (
    <div className="mr-1">
      <StartMenu active={start.active} />
      <Button
        iconURL="images/Windows logo (without text).ico"
        active={start.active}
        onClick={start.active ? handleClose : handleOpen}
      >
        Start
      </Button>
    </div>
  );
});

export default Start;
