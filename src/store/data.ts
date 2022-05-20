import { Program } from './programs';

export const welcome: Program = {
  slug: 'welcome',
  title: 'Welcome',
  x: 600,
  y: 300,
  width: 640,
  height: 380,
  minWidth: 400,
  minHeight: 320,
  maxWidth: 640,
  maxHeight: 380,
  active: true,
  component: 'Welcome',
};

export const contact: Program = {
  slug: 'contact',
  title: 'Contact',
  minWidth: 520,
  minHeight: 440,
  maxWidth: 520,
  maxHeight: 440,
  active: false,
  component: 'Contact',
};

export const programs = [welcome, contact];
