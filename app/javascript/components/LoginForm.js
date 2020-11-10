import React from 'react'
import { observer } from 'mobx-react'
import styles from '../styles/App.module.css'

function LoginFormComponent (props) {

    const onSubmitHandler = (e) => {
        e.preventDefault()
        props.onLoginButton(e)
    }

    return (
        <form className={styles.loginContainer }onSubmit={onSubmitHandler}>
            <input className={styles.input} placeholder='Username' />
            <input className={styles.input} type="password" placeholder='Password' />
            <button className={styles.button} type="submit">Login</button>
        </form>

    )


}

export const LoginForm = observer(LoginFormComponent)