import React from 'react'
import { observer } from 'mobx-react'
import { Token } from './Token'

function TokensContainer (props) {

    return (
        <div>
            <div>{`You have ${props.tokens.length} unused tokens left`}</div>
            {props.tokens.map((token) =>
            <Token key={`token-${token.id}`}token={token} />)}
        </div>
    )


}

export const Tokens = observer(TokensContainer)