import axios from 'axios'
import { runInAction } from 'mobx'

const getUsersAdmin = (appState) => {
    axios.get(`/users`, { headers: { 'Authorization': `${appState.user} ${appState.token}` } })
        .then((resp) =>
            runInAction(() => appState.users = resp.data.data
            ))
        .catch((resp) => console.log(resp))
}

export default getUsersAdmin