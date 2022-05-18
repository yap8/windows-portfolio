import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  className?: string;
  active?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, active, children }) => {
  return (
    <button
      className={twMerge(
        'h-8 flex items-center font-bold border-2 p-1',
        active
          ? 'border-b-white border-r-white'
          : 'border-t-white border-l-white',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
