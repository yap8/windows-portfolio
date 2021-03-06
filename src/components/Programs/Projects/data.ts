import { ShortcutI } from '../../Shortcut';

export interface Link {
  text: string;
  link: string;
}

export interface Project {
  screenshots?: Array<string>;
  title: string;
  text: string;
  technologies: Array<string>;
  links: Array<Link>;
}

export const shortcuts: Array<ShortcutI> = [
  {
    title: 'Portfolio',
    iconURL: 'images/Help page.ico',
    program: 'portfolio',
  },
  {
    title: 'Flashcards',
    iconURL: 'images/Help page.ico',
    program: 'flashcards',
  },
  {
    title: 'Messenger',
    iconURL: 'images/Help page.ico',
    program: 'messenger',
  },
];

export const flashcards: Project = {
  title: 'Flashcards',
  text: 'A fullstack MERN app. The user can create an account and add and later update collections of flashcards that can be used to help remember information.',
  screenshots: [
    'screenshots/flashcards/1.jpg',
    'screenshots/flashcards/2.jpg',
    'screenshots/flashcards/3.jpg',
    'screenshots/flashcards/4.jpg',
    'screenshots/flashcards/5.jpg',
    'screenshots/flashcards/6.jpg',
  ],
  technologies: [
    'React',
    'Redux',
    'Tailwind CSS',
    'Node.js',
    'Express',
    'MongoDB',
  ],
  links: [
    { text: 'Repo', link: 'https://github.com/yap8/flashcards' },
    { text: 'Demo', link: 'https://yap-flashcards.herokuapp.com/' },
  ],
};

export const messenger: Project = {
  title: 'Messenger',
  text: 'A fullstack app made with React & PHP. The user can create an account and send messages to other users. The UI is customizable as you can toggle dark theme, change background and spinner color.',
  screenshots: [
    'screenshots/messenger/1.jpg',
    'screenshots/messenger/2.jpg',
    'screenshots/messenger/3.jpg',
    'screenshots/messenger/4.jpg',
    'screenshots/messenger/5.jpg',
    'screenshots/messenger/6.jpg',
    'screenshots/messenger/7.jpg',
    'screenshots/messenger/8.jpg',
  ],
  technologies: ['React', 'Redux', 'Tailwind CSS', 'PHP', 'Slim', 'MySQL'],
  links: [
    { text: 'Repo', link: 'https://github.com/yap8/messenger' },
    { text: 'Demo', link: 'http://h91115tq.beget.tech/' },
  ],
};

export const portfolio: Project = {
  title: 'Portfolio',
  text: "The app you're currently using. Go ahead and explore it.",
  technologies: ['TypeScript', 'React', 'MobX', 'Tailwind CSS'],
  links: [{ text: 'Repo', link: 'https://github.com/yap8/windows-portfolio' }],
};
