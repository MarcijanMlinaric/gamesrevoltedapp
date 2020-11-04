import React from 'react'
import { useEffect } from 'react'
import { observer } from 'mobx-react'
import { AppContext } from '../state/AppContext'
import { Switch } from 'react-router-dom'

import login from '../services/login'
import { LoginForm } from '../components/LoginForm'


function AppComponent(props) {
    const { appState } = React.useContext(AppContext);
    
    useEffect(() => {
        if (appState.user === 'admin')
            props.history.push('/admin')        
        else if (appState.user)
            props.history.push('/user')
    }, [appState.user])
    
    const onLoginButtonHandler = (e) => {
        login(e.target[0].value, e.target[1].value, appState)
               
    } 


    return (
        <div>
            <LoginForm onLoginButton={onLoginButtonHandler}/>
            {appState.token === 'Invalid credentials' ? 
                (<div>Invalid credentials</div>) : (<div></div>)}
        </div>
    )
}

export const App = observer(AppComponent);