import { twMerge } from 'tailwind-merge';

interface StartProps {
  className?: string;
}

const Start: React.FC<StartProps> = ({ className }) => {
  return (
    <button
      className={twMerge(
        'flex items-center justify-center font-bold p-1 border-2 border-t-app-white border-l-app-white',
        className
      )}
    >
      Start
    </button>
  );
};

export default Start;
