import axios from 'axios'
import { runInAction } from 'mobx'

const tokenCreate = (appState) => {
    return axios.post(`/tokens`, {}, {headers: {'Authorization': `${appState.user} ${appState.token}`}})
    .then((resp) => 
        runInAction(() => {
            const tokens = [...appState.userData.tokens, resp.data.data]
            const attributes = appState.userData.attributes
            attributes.no_of_tokens -= 1
            const userData = {attributes: appState.userData.attributes, tokens: tokens}
            appState.userData = userData
        }))
} 

export default tokenCreate