import React from 'react'
import { observer } from 'mobx-react'


function UserComponent(props) {

    return (
        <div>
            <div>{`User id: ${props.user.id}`}</div>
            <div>{`User: ${props.user.attributes.username}`}</div>
            <div>{`Number of allowed tokens: ${props.user.attributes.no_of_tokens}`}</div>
            <div>{`Balance: ${props.user.attributes.balance}`}</div>
        </div>
    )

}

export const User = observer(UserComponent)