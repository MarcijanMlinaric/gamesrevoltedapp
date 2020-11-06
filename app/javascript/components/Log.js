import React from 'react'
import { observer } from 'mobx-react'
import { LogEntry } from './LogEntry'

function LogComponent(props) {

    return (
        <div>
            <div>Log:</div>
            {props.log.map((entry) =>
                <LogEntry key={`log-entry-${entry.id}`} entry={entry}
            user={props.users.find(({id}) => id == entry.attributes.user_id)} />)}
        </div>
    )
}

export const Log = observer(LogComponent)