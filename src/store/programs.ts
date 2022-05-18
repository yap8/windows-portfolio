import { makeAutoObservable } from 'mobx';

interface Program {
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
      { id: 1, title: 'Program 1', active: false },
    ];
  }

  openProgram(program: Program) {
    this.programs = [...this.programs, program];
  }

  closeProgram(id: number) {
    this.programs = this.programs.filter((program) => program.id !== id);
  }
}

export default new Programs();
