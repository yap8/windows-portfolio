import Start from './Start';
import Windows from './Windows';
import Time from './Time';

const Taskbar = () => {
  return (
    <div className="flex absolute h-10 border-t-2 border-white bottom-0 bg-app-gray w-full">
      <Start />
      <Windows />
      <Time />
    </div>
  );
};

export default Taskbar;
