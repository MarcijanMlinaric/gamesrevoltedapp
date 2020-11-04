import axios from 'axios'
import { runInAction } from 'mobx'

const login = (username, password, appState) => {
    axios.post('/auth/login', {"username": username, "password": password})
    .then((resp) =>
        runInAction(() => {
       appState.token = resp.data.token
       appState.user = resp.data.username 
    }))
    .catch((resp) => runInAction(() => {appState.token = "Invalid credentials"}))
} 

export default login