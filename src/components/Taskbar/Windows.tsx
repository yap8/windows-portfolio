import { observer } from 'mobx-react-lite';
import { twMerge } from 'tailwind-merge';

import programs from '../../store/programs';
import Window from './Window';

interface WindowProps {
  className?: string;
}

const Windows: React.FC<WindowProps> = observer(({ className }) => {
  const handleActive = (id: number) => {
    programs.makeProgramActive(id);
  };

  return (
    <ul className={twMerge('flex items-center', className)}>
      {programs.programs.map((window) => (
        <Window window={window} handleActive={handleActive} key={window.id} />
      ))}
    </ul>
  );
});

export default Windows;
