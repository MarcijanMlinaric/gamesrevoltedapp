import axios from 'axios'

const login = (username, password, appState) => {
    axios.post('/auth/login', {"username": username, "password": password})
    .then((resp) => {
       appState.token = resp.data.token
       appState.user = resp.data.username 
    })
} 

export default login