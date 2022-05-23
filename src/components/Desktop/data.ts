import { ShortcutI } from "../Shortcut";

export const shortcuts: Array<ShortcutI> = [
  {
    title: "Projects",
    iconURL: "images/Folder.ico",
    program: "projects",
  },
  ...Array(13).fill({ slug: Math.random() }),
  // {
  //   title: 'Language',
  //   iconURL: 'images/Earth (16 colors).ico',
  //   program: 'language',
  // },
  {
    title: "About me",
    iconURL: "images/User documents.ico",
    program: "about",
  },
  ...Array(13).fill({ slug: Math.random() }),
  {
    title: "Resume",
    iconURL: "images/Notepad document.ico",
    link: "https://yap8.github.io/portfolio/Nebozhenko_Frontend_Resume.pdf",
  },
  ...Array(13).fill({ slug: Math.random() }),
  {
    title: "GitHub",
    iconURL: "images/User with computer.ico",
    link: "https://github.com/yap8",
  },
  ...Array(13).fill({ slug: Math.random() }),
  {
    title: "Contact",
    iconURL: "images/Mail.ico",
    program: "contact",
  },
  ...Array(13).fill({ slug: Math.random() }),
  {
    title: "Old portfolio",
    iconURL: "images/Recycle Bin with paper.ico",
    link: "https://yap8.github.io/portfolio/",
  },
];
