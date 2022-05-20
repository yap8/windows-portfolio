interface StartMenuButtonProps {
  iconURL: string;
  onClick?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  children: React.ReactNode;
}

const StartMenuButton: React.FC<StartMenuButtonProps> = ({
  iconURL,
  children,
  ...props
}) => {
  return (
    <button
      className="w-48 flex items-center p-1 bg-app-gray hover:bg-app-blue hover:text-white focus:bg-app-blue focus:text-white"
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
