import Welcome from "./Welcome";
import Contact from "./Contact";
import About from "./About";
import Projects from "./Projects";
import Portfolio from "./Projects/Portfolio";
import Flashcards from "./Projects/Flashcards";
import Messenger from "./Projects/Messenger";

export interface ComponentRoute {
  name: string;
  component: React.ReactNode;
}

export const componentRoutes: Array<ComponentRoute> = [
  { name: "Welcome", component: <Welcome /> },
  { name: "Contact", component: <Contact /> },
  { name: "About", component: <About /> },
  { name: "Projects", component: <Projects /> },
  { name: "Portfolio", component: <Portfolio /> },
  { name: "Flashcards", component: <Flashcards /> },
  { name: "Messenger", component: <Messenger /> },
];

export const getComponent = (name: string) => {
  const componentRoute = componentRoutes.find((route) => route.name === name);

  return componentRoute?.component;
};
