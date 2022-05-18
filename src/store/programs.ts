import { makeAutoObservable } from 'mobx';

export interface Program {
  id: number;
  title: string;
  active: boolean;
}

class Programs {
  programs: Array<Program>;

  constructor() {
    makeAutoObservable(this);

    this.programs = [
      { id: 1, title: 'Program 1', active: true },
      { id: 2, title: 'Program 2', active: false },
    ];
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
