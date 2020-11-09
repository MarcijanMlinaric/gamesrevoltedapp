import React from 'react'
import { observer } from 'mobx-react'
import { LogEntry } from './LogEntry'
import styles from '../styles/AdminHome.module.css'

function LogComponent(props) {

    return (
        <div className={styles.page}>
            <div className={styles.title}>Log:</div>
            <div className={styles.container}>
                {props.log.map((entry) =>
                    <LogEntry key={`log-entry-${entry.id}`} entry={entry}
                        user={props.users.find(({ id }) => id == entry.attributes.user_id)} />)}
            </div>
        </div>
    )
}

export const Log = observer(LogComponent)