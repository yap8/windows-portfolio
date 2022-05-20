interface FolderProps {
  children: React.ReactNode;
}

const Folder: React.FC<FolderProps> = ({ children }) => {
  return (
    <div>
      <ul className="grid grid-cols-5 grid-rows-3">{children}</ul>
    </div>
  );
};

export default Folder;
