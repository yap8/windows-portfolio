import Start from './Start';
import Windows from './Windows';
import Time from './Time';

const Taskbar = () => {
  return (
    <div className="flex absolute border-t-2 border-white bottom-0 bg-app-gray w-full p-1">
      <Start className="mr-1" />
      <Windows className="flex-1" />
      <Time />
    </div>
  );
};

export default Taskbar;
