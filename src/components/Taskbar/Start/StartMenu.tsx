import { twMerge } from 'tailwind-merge';

import programs from '../../../store/programs';
import start from '../../../store/start';
import StartMenuButton from './StartMenuButton';
import SubMenu from './SubMenu';

interface StartMenuProps {
  active?: boolean;
}

const StartMenu: React.FC<StartMenuProps> = ({ active }) => {
  const handleOpen = (program: string) => {
    programs.openProgram(program);
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
              onClick={() => handleOpen('portfolio')}
            >
              Portfolio
            </StartMenuButton>
            <StartMenuButton
              iconURL="images/Help page.ico"
              onClick={() => handleOpen('flashcards')}
            >
              Flashcards
            </StartMenuButton>
            <StartMenuButton
              iconURL="images/Help page.ico"
              onClick={() => handleOpen('messenger')}
            >
              Messenger
            </StartMenuButton>
          </SubMenu>
        </li>
        <li>
          <StartMenuButton
            iconURL="images/Help book.ico"
            onClick={() => handleOpen('welcome')}
          >
            Welcome
          </StartMenuButton>
        </li>
        <li>
          <StartMenuButton
            iconURL="images/User documents.ico"
            onClick={() => handleOpen('about')}
          >
            About me
          </StartMenuButton>
        </li>
        <li>
          <StartMenuButton
            iconURL="images/Mail.ico"
            onClick={() => handleOpen('contact')}
          >
            Contact
          </StartMenuButton>
        </li>
        {/* <li>
          <StartMenuButton
            iconURL="images/Turn Off Computer (display only).ico"
            onClick={() => window.close()}
          >
            Shut down
          </StartMenuButton>
        </li> */}
      </ul>
    </div>
  );
};

export default StartMenu;
