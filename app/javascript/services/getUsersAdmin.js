import axios from 'axios'
import { runInAction } from 'mobx'

const getUsersAdmin = (appState) => {
    axios.get(`/users`, { headers: { 'Authorization': `${appState.user} ${appState.token}` } })
        .then((resp) =>
            runInAction(() => appState.users = resp.data.data.sort((a, b) => a.id - b.id)
            ))
        .catch((resp) => console.log(resp))
}

export default getUsersAdmin