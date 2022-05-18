import { observer } from 'mobx-react-lite';

import programs from '../../store/programs';
import Program from './Program';
import { getComponent } from './routes';

const Programs = observer(() => {
  const handleClose = (id: number) => {
    programs.closeProgram(id);
  };

  const handleActive = (id: number) => {
    programs.makeProgramActive(id);
  };

  return (
    <div>
      {programs.programs.map((program) => (
        <Program
          program={program}
          handleClose={handleClose}
          handleActive={handleActive}
          component={getComponent(program.component)}
          key={program.id}
        />
      ))}
    </div>
  );
});

export { Program };
export default Programs;
