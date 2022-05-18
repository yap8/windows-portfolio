import { makeAutoObservable } from 'mobx';

import { programs } from './data';

export interface Program {
  id: number;
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

    this.programs = programs;
  }

  openProgram(program: Program) {
    this.programs = [...this.programs, program];
  }

  closeProgram(id: number) {
    this.programs = this.programs.filter((program) => program.id !== id);
  }

  makeProgramActive(id: number) {
    this.programs = this.programs.map((program) =>
      program.id === id
        ? { ...program, active: true }
        : { ...program, active: false }
    );
  }
}

export default new Programs();
