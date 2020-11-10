import axios from 'axios'
import { runInAction } from 'mobx'

const getTokens = (appState) => {
    axios.get(`/tokens`, { headers: { 'Authorization': `${appState.user} ${appState.token}` } })
        .then((resp) =>
            runInAction(() => appState.userTokens = resp.data.data.sort((a, b) => a.id - b.id)
            ))
        .catch((resp) => console.log(resp))
}

export default getTokens