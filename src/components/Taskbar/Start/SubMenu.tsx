import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import StartMenuButton from './StartMenuButton';

interface SubMenuProps {
  toggleButtonText: string;
  children: React.ReactNode;
}

const SubMenu: React.FC<SubMenuProps> = ({ toggleButtonText, children }) => {
  const [focused, setFocused] = useState(false);

  const onFocus = () => setFocused(true);
  const onBlur = () => setTimeout(() => setFocused(false), 100);

  return (
    <div className="relative">
      <StartMenuButton
        iconURL="images/Folder.ico"
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {toggleButtonText}
      </StartMenuButton>
      <div
        className={twMerge(
          'hidden absolute left-48 top-0 -mt-0.5 border-2 border-black border-t-white border-l-0',
          focused && 'block'
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default SubMenu;
