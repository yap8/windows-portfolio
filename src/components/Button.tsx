import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  className?: string;
  iconURL?: string;
  active?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className,
  iconURL,
  active,
  children,
}) => {
  return (
    <button
      className={twMerge(
        'h-8 flex items-center justify-start border-2 p-1',
        active
          ? 'border-b-white border-r-white'
          : 'border-t-white border-l-white',
        className
      )}
    >
      {iconURL && (
        <div
          className="bg-contain bg-center bg-no-repeat w-8 h-full"
          style={{ backgroundImage: `url('${iconURL}')` }}
        />
      )}
      {children}
    </button>
  );
};

export default Button;
