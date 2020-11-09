import React from 'react'
import { observer } from 'mobx-react'
import styles from '../styles/UserHome.module.css'

function TokenComponent(props) {
    return (
        <div className={styles.token}>
            <div className={styles.code}>Token code: {props.token.attributes.token}</div>
            <div className={styles.value}>Token value: {props.token.attributes.value}</div>
            <div className={styles.expires}>Expires on: {props.token.attributes.expires}</div>
        </div>
    )
}

export const Token = observer(TokenComponent)