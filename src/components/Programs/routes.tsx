import Welcome from './Welcome';
import Contact from './Contact';

export interface ComponentRoute {
  name: string;
  component: React.ReactNode;
}

export const componentRoutes: Array<ComponentRoute> = [
  { name: 'Welcome', component: <Welcome /> },
  { name: 'Contact', component: <Contact /> },
];

export const getComponent = (name: string) => {
  const componentRoute = componentRoutes.find((route) => route.name === name);

  return componentRoute?.component;
};
