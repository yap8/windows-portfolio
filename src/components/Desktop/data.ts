export interface Shortcut {
  id: number;
  title?: string;
  iconURL?: string;
}

export const shortcuts: Array<Shortcut> = [
  {
    id: 1,
    title: 'Projects',
    iconURL: 'images/Folder.ico',
  },
  ...Array(13).fill({ id: Math.random() }),
  {
    id: 2,
    title: 'Contact',
    iconURL: 'images/Mail.ico',
  },
  ...Array(13).fill({ id: Math.random() }),
  {
    id: 4,
    title: 'Resume',
    iconURL: 'images/Notepad document.ico',
  },
  ...Array(13).fill({ id: Math.random() }),
  {
    id: 454,
    title: 'GitHub',
    iconURL: 'images/User with computer.ico',
  },
  ...Array(13).fill({ id: Math.random() }),
  {
    id: 123,
    title: 'Old portfolio',
    iconURL: 'images/Recycle Bin with paper.ico',
  },
  ...Array(13).fill({ id: Math.random() }),
  ...Array(14).fill({ id: Math.random() }),
  ...Array(14).fill({ id: Math.random() }),
  ...Array(11).fill({ id: Math.random() }),
  {
    id: 5,
    title: 'title',
    iconURL: 'images/Folder.ico',
  },
  {
    id: 6,
    title: 'title',
    iconURL: 'images/Folder.ico',
  },
  {
    id: 7,
    title: 'title',
    iconURL: 'images/Folder.ico',
  },
];
