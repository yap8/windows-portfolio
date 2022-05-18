import { Program } from '../../store/programs';
import Button from '../Button';

interface WindowProps {
  window: Program;
  handleActive: (slug: string) => void;
}

const Window: React.FC<WindowProps> = ({ window, handleActive }) => {
  return (
    <li key={window.slug}>
      <Button
        className="mr-1 w-40"
        active={window.active}
        onClick={() => handleActive(window.slug)}
      >
        {window.title}
      </Button>
    </li>
  );
};

export default Window;
