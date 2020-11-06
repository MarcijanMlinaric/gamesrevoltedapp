import React from 'react'
import { observer } from 'mobx-react'

function LogEntryComponent (props) {

    return (
        <div>{`${props.user.attributes.username} ${props.entry.attributes.action}`}</div>
    )


}

export const LogEntry = observer(LogEntryComponent)