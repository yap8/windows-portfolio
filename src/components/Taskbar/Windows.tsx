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

const Windows: React.FC = () => {
  return (
    <ul className="flex items-center">
      {windows.map((window) => (
        <Window window={window} key={window.id} />
      ))}
    </ul>
  );
};

export default Windows;
