import Project from "../Project";
import { messenger } from "./data";

const Messenger = () => {
  return (
    <Project
      screenshots={messenger.screenshots}
      title={messenger.title}
      text={messenger.text}
      technologies={messenger.technologies}
      links={messenger.links}
    />
  );
};

export default Messenger;
