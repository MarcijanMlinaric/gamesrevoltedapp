import React from 'react'
import { observer } from 'mobx-react'

function LoginFormComponent (props) {

    const onSubmitHandler = (e) => {
        e.preventDefault()
        props.onLoginButton(e)
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input placeholder='Username' />
            <input type="password" placeholder='Password' />
            <button type="submit">Login</button>
        </form>

    )


}

export const LoginForm = observer(LoginFormComponent)