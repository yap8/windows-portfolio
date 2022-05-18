import Desktop from './components/Desktop';
import { Program } from './components/Programs';
import Taskbar from './components/Taskbar';
import programs from './store/programs';

const App: React.FC = () => {
  return (
    <div className="overflow-hidden relative">
      <Taskbar />
      {programs.programs.map((program) => (
        <Program program={program} key={program.id} />
      ))}
      <Desktop />
    </div>
  );
};

export default App;
