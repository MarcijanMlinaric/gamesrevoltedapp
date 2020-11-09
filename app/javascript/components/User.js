import React from 'react'
import { observer } from 'mobx-react'
import styles from '../styles/AdminHome.module.css'


function UserComponent(props) {

    const onButtonClick = (e) => {
        e.preventDefault()
        props.history.push(`/admin/user/${props.user.id}`)
    }


    return (
        <div className={styles.userData}>
            <div className={styles.username}>{`User: ${props.user.attributes.username}`}</div>
            <div className={styles.id}>{`User id: ${props.user.id}`}</div>
            <div className={styles.noOfTokens}>{`Number of allowed tokens: ${props.user.attributes.no_of_tokens}`}</div>
            <div className={styles.balance}>{`Balance: ${props.user.attributes.balance}`}</div>
            <button className={styles.button} onClick={onButtonClick}>Edit user</button>
        </div>

    )

}

export const User = observer(UserComponent)