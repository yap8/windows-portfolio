import Desktop from './components/Desktop';
import Programs from './components/Programs';
import Taskbar from './components/Taskbar';

const App: React.FC = () => {
  return (
    <div className="overflow-hidden relative">
      <Taskbar />
      <Programs />
      <Desktop />
    </div>
  );
};

export default App;
