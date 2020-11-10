import React from 'react'
import { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { AppContext } from '../state/AppContext'
import { AllTokens } from '../components/AllTokens'
import patchUser from '../services/patchUser'
import styles from '../styles/EditUser.module.css'



function EditUserComponent(props) {
    const { appState } = React.useContext(AppContext);
    const [user, setUser] = useState('')
    const [button, setButton] = useState('Edit')



    //updating user
    useEffect(() =>
        setUser(appState.users.find(({ id }) => id === props.match.params.id))
        , [])

    const onFormSubmit = (e) => {
        e.preventDefault()
        if (button === 'Edit') {
            setButton('Save')
        } else {
            patchUser(appState, user.attributes.username,
                e.target[0].value, e.target[1].value)
            setButton('Edit')
        }
    }



    return (
        <div className={styles.mainDiv}>
            {user ?
                (<div className={styles.editUserContainer}>
                    <div className={styles.title}>Edit user:</div>
                    <div className={styles.container}>
                        <div className={styles.username}>{user.attributes.username}</div>
                        <form className={styles.editForm} onSubmit={onFormSubmit}>
                            <div className={styles.tokensContainer}>
                                <div className={styles.label}>Number of allowed tokens</div>
                                <input className={styles.formInput} defaultValue={user.attributes.no_of_tokens} disabled={button === 'Edit'} />
                            </div>
                            <div className={styles.balanceContainer}>
                                <div className={styles.label}>Balance</div>
                                <input className={styles.formInput} defaultValue={user.attributes.balance} disabled={button === 'Edit'} />
                            </div>
                            <button className={styles.button} type="submit">{button}</button>
                        </form>
                    </div>
                    <AllTokens history={props.history}
                        tokens={appState.userTokens.filter((token) => token.attributes.user_id = user.id)}
                        users={appState.users} />
                </div>
                ) :
                (<div></div>)}
        </div>
    )


}

export const EditUser = observer(EditUserComponent)