import axios from 'axios'
import { runInAction } from 'mobx'

const getTokens = (appState) => {
    axios.get(`/tokens`, { headers: { 'Authorization': `${appState.user} ${appState.token}` } })
        .then((resp) =>
            runInAction(() => appState.userTokens = resp.data.data
            ))
        .catch((resp) => console.log(resp))
}

export default getTokens