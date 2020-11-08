import React from 'react'
import { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { AppContext } from '../state/AppContext'
import DateTimePicker from 'react-datetime-picker'
import patchToken from '../services/patchToken'



function EditTokenComponent(props) {
    const { appState } = React.useContext(AppContext);
    const [token, setToken] = useState('')
    const [date, setDate] = useState('')
    const [button, setButton] = useState('Edit')

    useEffect(() =>
        setToken(appState.userTokens.find(({ id }) => id === props.match.params.id))
        , [])

    const onFormSubmit = (e) => {
        e.preventDefault()
        if (button === 'Edit') {
            setButton('Save')
        } else {
            patchToken(appState, props.history.location.state.username,
            token.attributes.token, e.target[0].value, date)
            setButton('Edit')
        }
    }

    console.log(date)
    

    return (
        <div>
            {token ?
                (<div>
                    <div>Token:</div>
                    <div>{token.attributes.token}</div>
                    <div>Belongs to:</div>
                    <div>{props.history.location.state.username}</div>
                    <form onSubmit={onFormSubmit}>
                        <div>Token value:</div>
                        <input defaultValue={token.attributes.value} disabled={button==='Edit'} />
                        <div>Expires on:</div>
                        <div>{token.attributes.expires}</div>
                        <DateTimePicker format={"y-MM-dd hh:mm:ss"} disabled={button==='Edit'} onChange={setDate} value={date} />
                        <button type="submit">{button}</button>
                    </form></div>
                ) :
                (<div></div>)}
        </div>
    )


}

export const EditToken = observer(EditTokenComponent)