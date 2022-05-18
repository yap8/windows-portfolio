import { twMerge } from 'tailwind-merge';
import programs from '../../../store/programs';

import StartMenuButton from './StartMenuButton';

interface StartMenuProps {
  active?: boolean;
}

const StartMenu: React.FC<StartMenuProps> = ({ active }) => {
  const handleOpenWelcome = () => {
    programs.openWelcome();
  };

  const handleOpenContact = () => {
    programs.openContact();
  };

  return (
    <div
      className={twMerge(
        'absolute bottom-10 left-1 border-2 border-black border-t-white border-l-white bg-app-gray',
        active ? 'flex' : 'hidden'
      )}
    >
      <div className="flex items-end bg-app-darkgray">
        <div
          className="w-8 h-32 bg-contain bg-no-repeat bg-bottom"
          style={{ backgroundImage: `url('images/Start Windows 95.png')` }}
        />
      </div>
      <ul>
        <li>
          <StartMenuButton iconURL="images/Folder.ico">
            Programs
          </StartMenuButton>
        </li>
        <li>
          <StartMenuButton
            iconURL="images/Help book.ico"
            onClick={handleOpenWelcome}
          >
            Help
          </StartMenuButton>
        </li>
        <li>
          <StartMenuButton
            iconURL="images/Mail.ico"
            onClick={handleOpenContact}
          >
            Contact
          </StartMenuButton>
        </li>
        <li>
          <StartMenuButton
            iconURL="images/Turn Off Computer (display only).ico"
            onClick={() => window.close()}
          >
            Shut down
          </StartMenuButton>
        </li>
      </ul>
    </div>
  );
};

export default StartMenu;
