import React from 'react'
import { useEffect } from 'react'
import { observer } from 'mobx-react'
import { Users } from '../components/Users'
import { AppContext } from '../state/AppContext'
import getUsersAdmin from '../services/getUsersAdmin'


function AdminHomeComponent(props) {
    const { appState } = React.useContext(AppContext);

    useEffect(() => getUsersAdmin(appState), [])

    return (
        <div>
            {appState.users ? (
                <Users users={appState.users}/>) : (<div></div>)}
        </div>

    )

}

export const AdminHome = observer(AdminHomeComponent)

