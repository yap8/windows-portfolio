import { observer } from 'mobx-react-lite';

import Desktop from './components/Desktop';
import { Program } from './components/Programs';
import Taskbar from './components/Taskbar';
import programs from './store/programs';

const App: React.FC = observer(() => {
  const handleClose = (id: number) => {
    programs.closeProgram(id);
  };

  const handleActive = (id: number) => {
    programs.makeProgramActive(id);
  };

  return (
    <div className="overflow-hidden relative">
      <Taskbar />
      {programs.programs.map((program) => (
        <Program
          program={program}
          handleClose={handleClose}
          handleActive={handleActive}
          key={program.id}
        />
      ))}
      <Desktop />
    </div>
  );
});

export default App;
