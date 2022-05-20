import { twMerge } from 'tailwind-merge';

import programs from '../../../store/programs';
import start from '../../../store/start';
import StartMenuButton from './StartMenuButton';
import SubMenu from './SubMenu';

interface StartMenuProps {
  active?: boolean;
}

const StartMenu: React.FC<StartMenuProps> = ({ active }) => {
  const handleOpenWelcome = () => {
    programs.openProgram('welcome');
    start.close();
  };

  const handleOpenContact = () => {
    programs.openProgram('contact');
    start.close();
  };

  return (
    <div
      className={twMerge(
        'absolute bottom-10 left-1 border-2 border-black border-t-white border-l-white',
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
          <SubMenu toggleButtonText="Projects">
            <StartMenuButton
              iconURL="images/Help page.ico"
              onClick={() => programs.openProgram('portfolio')}
            >
              Portfolio
            </StartMenuButton>
            <StartMenuButton
              iconURL="images/Help page.ico"
              onClick={() => programs.openProgram('flashcards')}
            >
              Flashcards
            </StartMenuButton>
            <StartMenuButton
              iconURL="images/Help page.ico"
              onClick={() => programs.openProgram('messenger')}
            >
              Messenger
            </StartMenuButton>
          </SubMenu>
        </li>
        <li>
          <StartMenuButton
            iconURL="images/Help book.ico"
            onClick={handleOpenWelcome}
          >
            Welcome
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
