import React from 'react'
import { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { AppContext } from '../state/AppContext';
import { TokenSubmit } from '../components/TokenSubmit'
import { TokenCreate } from '../components/TokenCreate'
import { Tokens } from '../components/Tokens'
import getUser from '../services/getUser'
import tokenCreate from '../services/tokenCreate'
import tokenUse from '../services/tokenUse'

function UserHomeComponent(props) {
    const { appState } = React.useContext(AppContext);
    

    useEffect(() => getUser(appState), [])

    const onTokenCreateHandler = (e) => {
        tokenCreate(appState)
    }

    const onTokenUseHandler = (token) => {
        tokenUse(appState, token)
    }
    

    return (
        <div>
            {appState.userData.attributes ? (
                <div>
                    <div>{`Welcome ${appState.userData.attributes.username}`}</div>
                    <div>{`You have ${appState.userData.attributes.no_of_tokens} left to create`}</div>
                    <div>{`Your balance is ${appState.userData.attributes.balance}`}</div>
                    <Tokens tokens={appState.userData.tokens}/>
                    <TokenSubmit submitToken={onTokenUseHandler} />
                    <TokenCreate onButtonClick={onTokenCreateHandler}/>
                    
                </div>) : (<div></div>)}
        </div>
    )

}

export const UserHome = observer(UserHomeComponent)

