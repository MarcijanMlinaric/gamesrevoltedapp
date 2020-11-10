import axios from 'axios'
import { runInAction } from 'mobx'

const patchUser = (appState, user, noOfTokens, balance) => {
    axios.patch(`/users/${user}`, { no_of_tokens: noOfTokens, balance: balance }, { headers: { 'Authorization': `${appState.user} ${appState.token}` } })
        .then((resp) =>
            runInAction(() => {
                appState.users[
                    appState.users.indexOf(
                        appState.users.find(
                            ({ id }) => id == resp.data.data.id
                        ))] = resp.data.data
            }
            )
        )
        .catch((resp) => console.log(resp))
}

export default patchUser