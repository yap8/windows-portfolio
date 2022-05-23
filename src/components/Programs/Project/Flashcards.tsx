import Project from "./";

const links = [
  { text: "lorem 1", link: "lorem1" },
  { text: "lorem 2", link: "lorem2" },
];

const screenshots = ["images/Book.ico", "images/Chat.ico", "images/Folder.ico"];

const Flashcards = () => {
  return (
    <Project
      screenshots={screenshots}
      title="title"
      text="lorem1"
      links={links}
    />
  );
};

export default Flashcards;
