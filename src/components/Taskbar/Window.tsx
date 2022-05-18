import { twMerge } from 'tailwind-merge';
import { WindowI } from './Windows';

interface WindowProps {
  window: WindowI;
}

const Window: React.FC<WindowProps> = ({ window }) => {
  return (
    <li key={window.id}>
      <button
        className={twMerge(
          'h-8 w-40 flex items-center p-1 border-2 mr-1',
          window.active
            ? 'border-b-white border-r-white'
            : 'border-t-white border-l-white'
        )}
      >
        {window.title}
      </button>
    </li>
  );
};

export default Window;
