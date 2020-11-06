import axios from 'axios'
import { runInAction } from 'mobx'

const getLog = (appState) => {
    axios.get(`/log`, { headers: { 'Authorization': `${appState.user} ${appState.token}` } })
        .then((resp) =>
            runInAction(() => appState.log = resp.data.data
            ))
        .catch((resp) => console.log(resp))
}

export default getLog