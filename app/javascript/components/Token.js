import React from 'react'
import { observer } from 'mobx-react'

function TokenComponent (props) {
    return (
        <div>{props.token.attributes.token}</div>
    )
}

export const Token = observer(TokenComponent)