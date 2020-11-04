import { observable, makeObservable, computed } from 'mobx'

class AppState {
  token = '';
  user = '';
  constructor() {
        makeObservable(this, {
            token: observable,
            user: observable
        })
    }

  clear() {
    this.token = '';
  }
}


export const appState = new AppState();
