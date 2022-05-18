export interface Shortcut {
  title: string;
  iconURL: string;
  program: string;
}

export const shortcuts: Array<Shortcut> = [
  {
    title: 'Projects',
    iconURL: 'images/Folder.ico',
    program: 'projects',
  },
  ...Array(12).fill({ slug: Math.random() }),
  {
    title: 'Language',
    iconURL: 'images/Earth (16 colors).ico',
    program: 'language',
  },
  {
    title: 'Contact',
    iconURL: 'images/Mail.ico',
    program: 'contact',
  },
  ...Array(13).fill({ slug: Math.random() }),
  {
    title: 'Resume',
    iconURL: 'images/Notepad document.ico',
    program: 'resume',
  },
  ...Array(13).fill({ slug: Math.random() }),
  {
    title: 'GitHub',
    iconURL: 'images/User with computer.ico',
    program: 'github',
  },
  ...Array(13).fill({ slug: Math.random() }),
  {
    title: 'Old portfolio',
    iconURL: 'images/Recycle Bin with paper.ico',
    program: 'old-portfolio',
  },
  ...Array(13).fill({ slug: Math.random() }),
  ...Array(14).fill({ slug: Math.random() }),
  ...Array(14).fill({ slug: Math.random() }),
  ...Array(11).fill({ slug: Math.random() }),
  {
    title: 'title',
    iconURL: 'images/Folder.ico',
    program: 'folder-1',
  },
  {
    title: 'title',
    iconURL: 'images/Folder.ico',
    program: 'folder-2',
  },
  {
    title: 'title',
    iconURL: 'images/Folder.ico',
    program: 'folder-3',
  },
];
