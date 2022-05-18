import { observer } from 'mobx-react-lite';

import programs from '../../store/programs';
import Program from './Program';
import { getComponent } from './routes';

const Programs = observer(() => {
  const handleClose = (slug: string) => {
    programs.closeProgram(slug);
  };

  const handleActive = (slug: string) => {
    programs.makeProgramActive(slug);
  };

  return (
    <div>
      {programs.programs.map((program) => (
        <Program
          program={program}
          handleClose={handleClose}
          handleActive={handleActive}
          component={getComponent(program.component)}
          key={program.slug}
        />
      ))}
    </div>
  );
});

export { Program };
export default Programs;
