import React from 'react'
import { observer } from 'mobx-react'
import { Users } from '../components/Users'
import { AppContext } from '../state/AppContext'


function AdminHomeComponent (props) {
    

    return (
        <Users />
    )

}

export const AdminHome = observer(AdminHomeComponent)

