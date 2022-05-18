import { Shortcut as ShortcutI } from './data';

interface ShortcutProps {
  shortcut: ShortcutI;
}

const Shortcut: React.FC<ShortcutProps> = ({ shortcut }) => {
  if (!shortcut.title || !shortcut.iconURL) return <li></li>;

  return (
    <li>
      <button
        className="h-full w-full flex text-white flex-col items-center text-center p-1 focus:bg-app-blue"
        onDoubleClick={() => console.log('OPEN')}
      >
        <div
          className="bg-contain bg-center bg-no-repeat h-12 w-12 mb-1"
          style={{ backgroundImage: `url('${shortcut.iconURL}')` }}
        />
        <h4>{shortcut.title}</h4>
      </button>
    </li>
  );
};

export default Shortcut;
