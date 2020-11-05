import { observable, makeObservable, computed } from 'mobx'

class AppState {
  token = '';
  user = '';
  userData = {}
  users = []

  constructor() {
        makeObservable(this, {
            token: observable,
            user: observable,
            userData: observable,
            users: observable
        })
    }

  clear() {
    this.token = '';
  }

}


export const appState = new AppState();
