import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';

const App: React.FC = () => {
  return (
    <div>
      <Taskbar />
      <Desktop />
    </div>
  );
};

export default App;
