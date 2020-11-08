import axios from 'axios'
import { runInAction } from 'mobx'

const tokenCreate = (appState) => {
    axios.post(`/tokens`, {}, {headers: {'Authorization': `${appState.user} ${appState.token}`}})
    .then((resp) => 
        runInAction(() => {
            const tokens = [...appState.userData.tokens, resp.data.data]
            const userData = {attributes: appState.userData.attributes, tokens: tokens}
            appState.userData = userData
        }))
    .catch((resp) => console.log(resp))
} 

export default tokenCreate