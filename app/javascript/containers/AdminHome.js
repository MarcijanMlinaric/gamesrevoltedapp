import React from 'react'
import { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { Users } from '../components/Users'
import { Log } from '../components/Log'
import { AppContext } from '../state/AppContext'
import { AllTokens } from '../components/AllTokens'
import getUsersAdmin from '../services/getUsersAdmin'
import getLog from '../services/getLog'
import getTokens from '../services/getTokens'
import createUser from '../services/createUser'


function AdminHomeComponent(props) {
    const { appState } = React.useContext(AppContext);
    const [tab, setTab] = useState("Users")

    useEffect(() => {
        getUsersAdmin(appState)
        getLog(appState)
        getTokens(appState)
    }, [])

    const onButtonClickHandler = (e) => {
        e.preventDefault()
        setTab(e.target.value)
    }

    const onCreateUserHandler = (e) => {
        createUser(e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value, appState)

    }

    return (
        <div>
            <button onClick={onButtonClickHandler}
                value="Users"
                disabled={tab === "Users"}>
                Users
            </button>
            <button onClick={onButtonClickHandler}
                value="Log"
                disabled={tab === "Log"}>
                Log
            </button>
            <button onClick={onButtonClickHandler}
                value="Tokens"
                disabled={tab === "Tokens"}>
                Tokens
            </button>
            {appState.users && tab === "Users" ?
                (<Users history= {props.history} users={appState.users} onCreateUser={onCreateUserHandler} />) :
                (tab === "Log" ?
                    (<Log log={appState.log} users={appState.users} />) :
                    (tab === "Tokens" ?
                        (<AllTokens history={props.history} tokens={appState.userTokens} users={appState.users} />) :
                        (<div></div>)))}

        </div>

    )

}

export const AdminHome = observer(AdminHomeComponent)

