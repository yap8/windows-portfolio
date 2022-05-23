import { Program } from "./programs";

export const welcome: Program = {
  slug: "welcome",
  title: "Welcome",
  x: 350,
  y: 150,
  width: 640,
  height: 380,
  minWidth: 400,
  minHeight: 340,
  maxWidth: 640,
  maxHeight: 380,
  active: true,
  component: "Welcome",
};

export const contact: Program = {
  slug: "contact",
  title: "Contact",
  x: 400,
  y: 100,
  minWidth: 520,
  minHeight: 440,
  maxWidth: 520,
  maxHeight: 440,
  active: false,
  component: "Contact",
};

export const projects: Program = {
  slug: "projects",
  title: "Projects",
  minWidth: 520,
  minHeight: 320,
  maxWidth: 520,
  maxHeight: 320,
  active: false,
  component: "Projects",
};

export const portfolio: Program = {
  slug: "portfolio",
  title: "Portfolio",
  x: 100,
  minWidth: 480,
  minHeight: 520,
  active: false,
  component: "Portfolio",
};

export const flashcards: Program = {
  slug: "flashcards",
  title: "Flashcards",
  x: 100,
  minWidth: 520,
  minHeight: 600,
  active: false,
  component: "Flashcards",
};

export const messenger: Program = {
  slug: "messenger",
  title: "Messenger",
  x: 100,
  minWidth: 540,
  minHeight: 580,
  active: false,
  component: "Messenger",
};

export const about: Program = {
  slug: "about",
  title: "About",
  x: 450,
  minWidth: 480,
  minHeight: 440,
  maxWidth: 780,
  maxHeight: 580,
  active: false,
  component: "About",
};

export const programs = [
  welcome,
  contact,
  projects,
  portfolio,
  flashcards,
  messenger,
  about,
];
