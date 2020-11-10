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
import styles from '../styles/UserHome.module.css'

function UserHomeComponent(props) {
    const { appState } = React.useContext(AppContext);
    const [errors, setErrors] = useState('');


    //getting data
    useEffect(() => getUser(appState), [])

    const onTokenCreateHandler = (e) => {
        tokenCreate(appState)
            .catch((resp) => setErrors('Unable to create token'))
    }

    const onTokenUseHandler = (token) => {
        tokenUse(appState, token)
            .catch((resp) => setErrors('Token is invalid or expired'))

    }


    return (
        <div className={styles.mainDiv}>
            {appState.userData.attributes ? (
                <div className={styles.userHomeContainer}>
                    <div className={styles.welcome}>{`Welcome ${appState.userData.attributes.username}`}</div>
                    <div className={styles.infoContainer}>
                        <div className={styles.submitContainer} >
                            <div className={styles.balance}>{`Your balance is ${appState.userData.attributes.balance}`}</div>
                            <TokenSubmit submitToken={onTokenUseHandler} />
                        </div>
                        <div className={styles.createContainer}>
                            <div className={styles.tokensLeft}>{`You have ${appState.userData.attributes.no_of_tokens} tokens left to create`}</div>
                            <TokenCreate onButtonClick={onTokenCreateHandler} />
                        </div>
                    </div>
                    {errors ? (
                        <div>{errors}</div>) : <div></div>}
                    <Tokens tokens={appState.userData.tokens} />

                </div>) : (<div></div>)}
        </div>
    )

}

export const UserHome = observer(UserHomeComponent)

