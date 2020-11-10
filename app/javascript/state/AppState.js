import { observable, makeObservable, computed } from 'mobx'

class AppState {
  token = '';
  user = '';
  userData = {}
  users = ''
  log = ''
  userTokens = ''


  constructor() {
    makeObservable(this, {
      token: observable,
      user: observable,
      userData: observable,
      users: observable,
      log: observable,
      userTokens: observable
    })
  }

  clear() {
    this.token = '';
  }

}


export const appState = new AppState();
