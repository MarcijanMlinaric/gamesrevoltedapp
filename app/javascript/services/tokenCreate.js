import axios from 'axios'
import { runInAction } from 'mobx'

const tokenCreate = (appState) => {
    axios.post(`/tokens`, {}, {headers: {'Authorization': `${appState.user} ${appState.token}`}})
    .then((resp) => 
        runInAction(() => {
            const tokens = [appState.userData.tokens].push(resp.data.attributes)
            const userData = {attributes: appState.userData.attributes, tokens: tokens}
        }))
    .catch((resp) => console.log(resp))
} 

export default tokenCreate