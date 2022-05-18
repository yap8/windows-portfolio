import { Program } from '../../store/programs';
import Button from '../Button';

interface WindowProps {
  window: Program;
  handleActive: (id: number) => void;
}

const Window: React.FC<WindowProps> = ({ window, handleActive }) => {
  return (
    <li key={window.id}>
      <Button
        className="mr-1 w-40"
        active={window.active}
        onClick={() => handleActive(window.id)}
      >
        {window.title}
      </Button>
    </li>
  );
};

export default Window;
