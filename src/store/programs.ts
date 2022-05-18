import { makeAutoObservable } from 'mobx';

import { welcome, programs } from '../data';

export interface Program {
  slug: string;
  title: string;
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
  active: boolean;
  component: string;
}

class Programs {
  programs: Array<Program>;

  constructor() {
    makeAutoObservable(this);

    this.programs = [welcome];
  }

  openProgram(slug: string) {
    // check if program is already opened
    const opened = this.programs.find((program) => program.slug === slug);

    // if so make it active
    if (opened) return this.makeProgramActive(opened.slug);

    // check if program is defined
    const programToBeOpened = programs.find((program) => program.slug === slug);

    if (!programToBeOpened) return;

    // open it and make it active
    this.programs.push(programToBeOpened);
    this.makeProgramActive(programToBeOpened.slug);
  }

  closeProgram(slug: string) {
    this.programs = this.programs.filter((program) => program.slug !== slug);
  }

  makeProgramActive(slug: string) {
    this.programs = this.programs.map((program) =>
      program.slug === slug
        ? { ...program, active: true }
        : { ...program, active: false }
    );
  }
}

export default new Programs();
