import React from 'react'
import { useState } from 'react'
import { observer } from 'mobx-react'
import { User } from './User'
import { CreateUserForm } from './CreateUserForm'
import styles from '../styles/AdminHome.module.css'

function UsersComponent(props) {
    const [createUser, setCreateUser] = useState(false)

    const onButtonClickHanlder = (e) => {
        e.preventDefault()
        setCreateUser(!createUser)

    }

    const onCreateUserHandler = (e) => {
        e.preventDefault()
        props.onCreateUser(e)
        setCreateUser(!createUser)
    }

    return (

        <div className={styles.page}>
            <button className={styles.button} onClick={onButtonClickHanlder}>Create user</button>
            {createUser ? (<CreateUserForm onCreateUser={onCreateUserHandler} />) : (<div></div>)}
            <div className={styles.title}>Users:</div>
            <div className={styles.container}>
                {props.users.map((user) => user.attributes.username !== 'admin' ?
                    (<User key={`user-${user.id}`} user={user} history={props.history} />) : (<React.Fragment key={'none'} />))}
            </div>
        </div>
    )


}

export const Users = observer(UsersComponent)