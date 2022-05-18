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
    <button
      className="w-full flex items-center p-1 hover:bg-app-blue hover:text-white"
      {...props}
    >
      <div
        className="w-8 h-8 mx-2 bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url('${iconURL}')` }}
      />
      {children}
    </button>
  );
};

export default StartMenuButton;
