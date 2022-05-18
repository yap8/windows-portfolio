import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  className?: string;
  iconURL?: string;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className,
  iconURL,
  active,
  children,
  ...props
}) => {
  return (
    <button
      className={twMerge(
        'h-8 flex bg-app-gray items-center justify-start border-2 border-black p-1',
        active
          ? 'border-b-white border-r-white'
          : 'border-t-white border-l-white',
        className
      )}
      {...props}
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
