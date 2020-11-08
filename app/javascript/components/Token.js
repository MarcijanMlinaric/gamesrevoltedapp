import React from 'react'
import { observer } from 'mobx-react'

function TokenComponent(props) {
    return (
        <div>
            <div>{props.token.attributes.token}</div>
            <div>{props.token.attributes.value}</div>
            <div>{props.token.attributes.expires}</div>
        </div>
    )
}

export const Token = observer(TokenComponent)