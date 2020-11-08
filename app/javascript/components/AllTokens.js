import React from 'react'
import { observer } from 'mobx-react'
import { TokenAdmin } from './TokenAdmin'

function AllTokensComponent(props) {

    return (
        <div>
            <div>Tokens:</div>
            {props.tokens.map((token) =>
                <TokenAdmin key={`token-${token.id}`} token={token}  history={props.history}
            user={props.users.find(({id}) => id == token.attributes.user_id)} />)}
        </div>
    )
}

export const AllTokens = observer(AllTokensComponent)