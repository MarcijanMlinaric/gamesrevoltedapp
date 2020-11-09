import React from 'react'
import { observer } from 'mobx-react'
import styles from '../styles/AdminHome.module.css'

function LogEntryComponent(props) {

    return (
        <div className={styles.logEntry}>
            <div className={styles.logUser}>{props.user.attributes.username}</div>
            <div className={styles.logAction}>{props.entry.attributes.action}</div>
        </div>
    )


}

export const LogEntry = observer(LogEntryComponent)