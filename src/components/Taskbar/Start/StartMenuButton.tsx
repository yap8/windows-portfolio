interface StartMenuButtonProps {
  iconURL: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const StartMenuButton: React.FC<StartMenuButtonProps> = ({
  iconURL,
  children,
  ...props
}) => {
  return (
    <button className="flex items-center p-1" {...props}>
      <div
        className="w-8 h-8 mx-2 bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url('${iconURL}')` }}
      />
      {children}
    </button>
  );
};

export default StartMenuButton;
