import { observable, makeObservable, computed } from 'mobx'

class AppState {
  token = '';
  user = '';
  userData = {}
  constructor() {
        makeObservable(this, {
            token: observable,
            user: observable,
            userData: observable
        })
    }

  clear() {
    this.token = '';
  }

}


export const appState = new AppState();
