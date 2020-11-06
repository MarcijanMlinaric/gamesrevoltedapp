import React from 'react'
import { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { AppContext } from '../state/AppContext'
import patchUser from '../services/patchUser'



function EditUserComponent(props) {
    const { appState } = React.useContext(AppContext);
    const [user, setUser] = useState('')
    const [button, setButton] = useState('Edit')

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
        <div>
            {user ?
                (<div>
                    <div>User:</div>
                    <div>{user.attributes.username}</div>
                    <form onSubmit={onFormSubmit}>
                        <div>Number of allowed tokens</div>
                        <input defaultValue={user.attributes.no_of_tokens} disabled={button==='Edit'} />
                        <div>Balance</div>
                        <input defaultValue={user.attributes.balance} disabled={button==='Edit'} />
                        <button type="submit">{button}</button>
                    </form></div>
                ) :
                (<div></div>)}
        </div>
    )


}

export const EditUser = observer(EditUserComponent)