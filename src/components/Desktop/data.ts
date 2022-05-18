export interface Shortcut {
  id: number;
  title?: string;
  iconURL?: string;
}

export const shortcuts: Array<Shortcut> = [
  {
    id: 1,
    title: 'title',
    iconURL: 'images/Folder.ico',
  },
  ...Array(15).fill({ id: Math.random() }),
  { id: 2, title: 'title', iconURL: 'images/Folder.ico' },
  ...Array(15).fill({ id: Math.random() }),
  { id: 3, title: 'title', iconURL: 'images/Folder.ico' },
  ...Array(15).fill({ id: Math.random() }),
  { id: 4, title: 'title', iconURL: 'images/Folder.ico' },
  ...Array(15).fill({ id: Math.random() }),
  { id: 5, title: 'title', iconURL: 'images/Folder.ico' },
  ...Array(15).fill({ id: Math.random() }),
  { id: 6, title: 'title', iconURL: 'images/Folder.ico' },
  ...Array(15).fill({ id: Math.random() }),
  ...Array(16).fill({ id: Math.random() }),
  ...Array(16).fill({ id: Math.random() }),
  ...Array(16).fill({ id: Math.random() }),
  ...Array(16).fill({ id: Math.random() }),
  ...Array(16).fill({ id: Math.random() }),
  ...Array(11).fill({ id: Math.random() }),
  { id: 7, title: 'title', iconURL: 'images/Folder.ico' },
  { id: 8, title: 'title', iconURL: 'images/Folder.ico' },
  { id: 9, title: 'title', iconURL: 'images/Folder.ico' },
  { id: 10, title: 'title', iconURL: 'images/Folder.ico' },
  { id: 11, title: 'title', iconURL: 'images/Folder.ico' },
];
