import React from 'react'
import { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { AppContext } from '../state/AppContext';
import getUser from '../services/getUser'

function UserHomeComponent(props) {
    const { appState } = React.useContext(AppContext);
    

    useEffect(() => getUser(appState), [])
    
    return (
        <div>
            {appState.userData.attributes ? (
                <div>
                    <div>{`Welcome ${appState.userData.attributes.username}`}</div>
                    <div>{`You have ${appState.userData.attributes.no_of_tokens} left to create`}</div>
                    <div>{`Your balance is ${appState.userData.attributes.balance}`}</div>
                    <div>{`Your tokens: ${appState.userData.tokens}`}</div>
                </div>) : (<div></div>)}
        </div>
    )

}

export const UserHome = observer(UserHomeComponent)

