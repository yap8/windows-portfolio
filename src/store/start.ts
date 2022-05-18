import { makeAutoObservable } from 'mobx';

class Start {
  active: boolean;

  constructor() {
    makeAutoObservable(this);

    this.active = false;
  }

  open() {
    this.active = true;
  }

  close() {
    this.active = false;
  }
}

export default new Start();
