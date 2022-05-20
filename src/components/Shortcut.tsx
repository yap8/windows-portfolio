import programs from '../store/programs';
import { Shortcut as ShortcutI } from './Desktop/data';

interface ShortcutProps {
  shortcut: ShortcutI;
}

const Shortcut: React.FC<ShortcutProps> = ({ shortcut }) => {
  if (!shortcut.title || !shortcut.iconURL) return <li></li>;

  const handleClick = (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
    program?: string
  ) => {
    // if not doubleclick do not open link/program
    if (e.detail === 1) return e.preventDefault();

    if (program) programs.openProgram(program);
  };

  return (
    <li>
      {shortcut.link ? (
        <a
          className="h-full w-full flex text-white flex-col items-center text-center p-1 focus:bg-app-blue"
          href={shortcut.link}
          target="_blank"
          rel="noreferrer"
          onClick={handleClick}
        >
          <div
            className="bg-contain bg-center bg-no-repeat h-12 w-12 mb-1"
            style={{ backgroundImage: `url('${shortcut.iconURL}')` }}
          />
          <h4>{shortcut.title}</h4>
        </a>
      ) : (
        <button
          className="h-full w-full flex text-white flex-col items-center text-center p-1 focus:bg-app-blue"
          onClick={(e) => handleClick(e, shortcut.program)}
        >
          <div
            className="bg-contain bg-center bg-no-repeat h-12 w-12 mb-1"
            style={{ backgroundImage: `url('${shortcut.iconURL}')` }}
          />
          <h4>{shortcut.title}</h4>
        </button>
      )}
    </li>
  );
};

export default Shortcut;
