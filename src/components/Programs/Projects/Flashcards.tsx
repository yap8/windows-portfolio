import Project from "../Project";
import { flashcards } from "./data";

const Flashcards = () => {
  return (
    <Project
      screenshots={flashcards.screenshots}
      title={flashcards.title}
      text={flashcards.text}
      technologies={flashcards.technologies}
      links={flashcards.links}
    />
  );
};

export default Flashcards;
