import React from 'react'
import { observer } from 'mobx-react'
import styles from '../styles/AdminHome.module.css'

function TokenAdminComponent(props) {

    const onButtonClick = (e) => {
        e.preventDefault()
        props.history.push(`/admin/token/${props.token.id}`, { username: props.user.attributes.username })
    }


    return (
        <div className={styles.token}>
            <div className={styles.code}>{props.token.attributes.token}</div>
            <div className={styles.userToken}>Onwer: {props.user.attributes.username}</div>
            <div className={styles.value}>Value: {props.token.attributes.value}</div>
            <div className={styles.expires}>Expires: {props.token.attributes.expires}</div>
            <button className={styles.button} onClick={onButtonClick}>Edit token</button>
        </div>
    )


}

export const TokenAdmin = observer(TokenAdminComponent)