import { twMerge } from 'tailwind-merge';

interface TitleProps {
  className?: string;
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ className, children }) => {
  return (
    <h2 className={twMerge('text-xl font-semibold mb-2', className)}>
      {children}
    </h2>
  );
};

export default Title;
