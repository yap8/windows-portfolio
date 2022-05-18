import { twMerge } from 'tailwind-merge';

interface StartMenuProps {
  active?: boolean;
}

const StartMenu: React.FC<StartMenuProps> = ({ active }) => {
  return (
    <div
      className={twMerge(
        'absolute bottom-10 left-1 border-2 border-black border-t-white border-l-white bg-app-white',
        active ? 'flex' : 'hidden'
      )}
    >
      <div className="flex items-end h-64 bg-app-darkgray">
        <div
          className="w-8 h-32 bg-contain bg-no-repeat bg-bottom"
          style={{ backgroundImage: `url('images/Start Windows 95.png')` }}
        />
      </div>
      <ul>
        <li>PROGRAMS</li>
        <li>WELCOME</li>
        <li>SHUT DOWN</li>
      </ul>
    </div>
  );
};

export default StartMenu;
