import React from 'react'
import { observer } from 'mobx-react'

function TokenAdminComponent(props) {

    const onButtonClick = (e) => {
        e.preventDefault()
        props.history.push(`/admin/token/${props.token.id}`, {username: props.user.attributes.username})
    }


    return (
        <div>
            <div>{props.user.attributes.username}</div>
            <div>{props.token.attributes.token}</div>
            <div>{props.token.attributes.value}</div>
            <div>{props.token.attributes.expires}</div>
            <button onClick={onButtonClick}>Edit token</button>
            <div>---------------------</div>
        </div>
    )


}

export const TokenAdmin = observer(TokenAdminComponent)