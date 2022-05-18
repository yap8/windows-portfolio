import { observer } from 'mobx-react-lite';
import { twMerge } from 'tailwind-merge';

import programs from '../../store/programs';
import Window from './Window';

interface WindowProps {
  className?: string;
}

const Windows: React.FC<WindowProps> = observer(({ className }) => {
  const handleActive = (slug: string) => {
    programs.makeProgramActive(slug);
  };

  return (
    <ul className={twMerge('flex items-center', className)}>
      {programs.programs.map((window) => (
        <Window window={window} handleActive={handleActive} key={window.slug} />
      ))}
    </ul>
  );
});

export default Windows;
