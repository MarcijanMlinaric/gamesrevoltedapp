import axios from 'axios'
import { runInAction } from 'mobx'

const patchToken = (appState, user, token, value, expires) => {
    axios.patch(`/tokens/${user}`, { token: token, value: value, expires: expires }, { headers: { 'Authorization': `admin ${appState.token}` } })
        .then((resp) =>
            runInAction(() => {
                appState.userTokens[
                    appState.userTokens.indexOf(
                        appState.userTokens.find(
                            ({ id }) => id == resp.data.data.id
                        ))] = resp.data.data
            }
            )
        )
        .catch((resp) => console.log(resp))
}

export default patchToken