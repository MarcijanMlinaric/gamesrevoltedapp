import React from 'react'
import { observer } from 'mobx-react'
import { User } from './User'

function UsersComponent (props) {

    return (
        <div>
            <div>Users:</div>
            {props.users.map((user) =>
            <User key={`user-${user.id}`} user={user} />)}
        </div>
    )


}

export const Users = observer(UsersComponent)