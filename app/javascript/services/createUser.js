import axios from 'axios'
import { runInAction } from 'mobx'

const createUser = (username, password, tokens, balance, appState) => {
    axios.post('/users',
        { "username": username, "password": password, "no_of_tokens": tokens, "balance": balance },
        { headers: { 'Authorization': `${appState.user} ${appState.token}` } })
        .then((resp) =>
            runInAction(() => appState.users.push(resp.data.data)))
        .catch((resp) => console.log(resp))
}

export default createUser