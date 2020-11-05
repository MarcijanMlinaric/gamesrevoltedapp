import axios from 'axios'
import { runInAction } from 'mobx'

const tokenUse = (appState, token) => {
    axios.patch(`/tokens/${appState.user}`, {token: token}, {headers: {'Authorization': `${appState.user} ${appState.token}`}})
    .then((resp) => 
        runInAction(() => {
            appState.userData = {attributes: resp.data.data.attributes,
                tokens: resp.data.included
        }}))
    .catch((resp) => console.log(resp))
} 

export default tokenUse