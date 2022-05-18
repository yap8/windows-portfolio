import { shortcuts } from './data';
import Shortcut from './Shortcut';

const Desktop: React.FC = () => {
  return (
    <ul className="h-screen bg-app-green p-1 pb-12 grid grid-cols-14 grid-rows-8">
      {shortcuts.map((shortcut) => (
        <Shortcut shortcut={shortcut} key={shortcut.program} />
      ))}
    </ul>
  );
};

export default Desktop;
