import { WindowI } from './Windows';
import Button from '../Button';

interface WindowProps {
  window: WindowI;
}

const Window: React.FC<WindowProps> = ({ window }) => {
  return (
    <li key={window.id}>
      <Button className="mr-1 w-40" active={window.active}>
        {window.title}
      </Button>
    </li>
  );
};

export default Window;
