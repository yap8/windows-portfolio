import Shortcut from '../../Shortcut';
import Folder from '../Folder';
import { shortcuts } from './data';

const Projects = () => {
  return (
    <div>
      <Folder>
        {shortcuts.map((shortcut) => (
          <Shortcut shortcut={shortcut} />
        ))}
      </Folder>
    </div>
  );
};

export default Projects;
