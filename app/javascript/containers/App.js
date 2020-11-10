import React from 'react'
import { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { AppContext } from '../state/AppContext'
import { Switch } from 'react-router-dom'

import styles from '../styles/App.module.css'

import login from '../services/login'
import { LoginForm } from '../components/LoginForm'


function AppComponent(props) {
    const { appState } = React.useContext(AppContext);
    const [errors, setErrors] = useState('')
    
    useEffect(() => {
        if (appState.user === 'admin')
            props.history.push('/admin')        
        else if (appState.user)
            props.history.push('/user')
    }, [appState.user])
    
    const onLoginButtonHandler = (e) => {
        login(e.target[0].value, e.target[1].value, appState)
        .catch((resp) => setErrors(resp))
               
    } 

    

    return (
        <div className={styles.mainDiv}>
            <LoginForm onLoginButton={onLoginButtonHandler}/>
            {errors ? 
                (<div>Invalid credentials</div>) : (<div></div>)}
        </div>
    )
}

export const App = observer(AppComponent);