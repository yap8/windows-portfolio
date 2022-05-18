import { shortcuts } from './data';
import Shortcut from './Shortcut';

const Desktop: React.FC = () => {
  return (
    <ul className="h-screen bg-app-green p-1 pb-12 grid grid-cols-16 grid-rows-12">
      {shortcuts.map((shortcut) => (
        <Shortcut shortcut={shortcut} key={shortcut.title} />
      ))}
    </ul>
  );
};

export default Desktop;
