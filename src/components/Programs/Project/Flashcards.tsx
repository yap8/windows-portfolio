import Project from "./";

const links = [
  { text: "Repo", link: "https://github.com/yap8/flashcards" },
  { text: "Demo", link: "https://yap-flashcards.herokuapp.com/" },
];

const screenshots = ["images/Book.ico", "images/Chat.ico", "images/Folder.ico"];

const Flashcards = () => {
  return (
    <Project
      screenshots={screenshots}
      title="Flashcards"
      text="A fullstack MERN app. The user can create an account and add and later update collections of flashcards that can be used to help remember information."
      links={links}
    />
  );
};

export default Flashcards;
