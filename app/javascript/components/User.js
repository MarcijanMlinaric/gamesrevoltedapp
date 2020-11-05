import React from 'react'
import { observer } from 'mobx-react'


function UserComponent(props) {

    return (
        <div>User</div>
    )

}

export const User = observer(UserComponent)