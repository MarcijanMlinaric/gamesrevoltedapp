import React from 'react'
import { observer } from 'mobx-react'

function TokenAdminComponent (props) {

    return (
        <div>{`${props.user.attributes.username} ${props.token.attributes.token}`}</div>
    )


}

export const TokenAdmin = observer(TokenAdminComponent)