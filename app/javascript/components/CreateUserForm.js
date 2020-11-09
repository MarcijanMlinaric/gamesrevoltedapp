import React from 'react'
import { observer } from 'mobx-react'
import styles from '../styles/AdminHome.module.css'

function CreateUserFormComponent(props) {

    const onSubmitHandler = (e) => {
        e.preventDefault()
        props.onCreateUser(e)
    }

    return (
        <form className={styles.createForm} onSubmit={onSubmitHandler}>
            <input className={styles.createUsername} placeholder='Username' />
            <input className={styles.createPassword} placeholder='Password' />
            <input className={styles.createNoOfTokens} placeholder='Number of allowed tokens' />
            <input className={styles.createBalance} placeholder='Balance' />
            <button id={styles.button} type="submit">Create user</button>
        </form>

    )


}

export const CreateUserForm = observer(CreateUserFormComponent)