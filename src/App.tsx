import { observer } from 'mobx-react-lite';

import Desktop from './components/Desktop';
import Programs from './components/Programs';
import Taskbar from './components/Taskbar';
import start from './store/start';

const App: React.FC = observer(() => {
  return (
    <div className="overflow-hidden relative" onClick={() => start.close()}>
      <Taskbar />
      <Programs />
      <Desktop />
    </div>
  );
});

export default App;
