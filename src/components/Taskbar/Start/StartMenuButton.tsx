interface StartMenuButtonProps {
  iconURL: string;
  children: React.ReactNode;
}

const StartMenuButton: React.FC<StartMenuButtonProps> = ({
  iconURL,
  children,
}) => {
  return (
    <button className="flex items-center p-1">
      <div
        className="w-8 h-8 mx-2 bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url('${iconURL}')` }}
      />
      {children}
    </button>
  );
};

export default StartMenuButton;
