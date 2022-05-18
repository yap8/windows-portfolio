import { twMerge } from 'tailwind-merge';
import Window from './Window';

export interface WindowI {
  id: number;
  title: string;
  active: boolean;
}

const windows: WindowI[] = [
  { id: 1, title: 'Program 1', active: true },
  { id: 2, title: 'Program 2', active: false },
];

interface WindowProps {
  className?: string;
}

const Windows: React.FC<WindowProps> = ({ className }) => {
  return (
    <ul className={twMerge('flex items-center', className)}>
      {windows.map((window) => (
        <Window window={window} key={window.id} />
      ))}
    </ul>
  );
};

export default Windows;
