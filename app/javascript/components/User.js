import React from 'react'
import { observer } from 'mobx-react'


function UserComponent(props) {

    const onButtonClick = (e) => {
        e.preventDefault()
        props.history.push(`/admin/${props.user.id}`)
    }


    return (
        <div>
            <div>{`User id: ${props.user.id}`}</div>
            <div>{`User: ${props.user.attributes.username}`}</div>
            <div>{`Number of allowed tokens: ${props.user.attributes.no_of_tokens}`}</div>
            <div>{`Balance: ${props.user.attributes.balance}`}</div>
            <button onClick={onButtonClick}>Edit user</button>
            <div>---------------------------------------</div>
        </div>
    )

}

export const User = observer(UserComponent)