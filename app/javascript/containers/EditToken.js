import React from 'react'
import { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { AppContext } from '../state/AppContext'
import DateTimePicker from 'react-datetime-picker'
import patchToken from '../services/patchToken'
import styles from '../styles/EditToken.module.css'



function EditTokenComponent(props) {
    const { appState } = React.useContext(AppContext);
    const [token, setToken] = useState('')
    const [date, setDate] = useState('')
    const [button, setButton] = useState('Edit')

    //updating token
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
        <div className={styles.mainDiv}>
            {token ?
                (<div className={styles.editTokenContainer}>
                    <div className={styles.title}>Edit token:</div>
                    <div className={styles.container}>
                        <div className={styles.tokenInfo}>
                            <div className={styles.token}>{token.attributes.token}</div>
                            <div className={styles.username}>Belongs to: {props.history.location.state.username}</div>
                        </div>
                        <form className={styles.editForm} onSubmit={onFormSubmit}>
                            <div className={styles.valueContainer}>
                                <div className={styles.label}>Token value:</div>
                                <input className={styles.formInput} defaultValue={token.attributes.value} disabled={button === 'Edit'} />
                            </div>
                            <div className={styles.expiresContainer}>
                                <div className={styles.label}>Expires on:</div>
                                <div>{token.attributes.expires}</div>
                                <DateTimePicker className={styles.formInput} format={"y-MM-dd hh:mm:ss"} disabled={button === 'Edit'} onChange={setDate} value={date} />
                            </div>
                            <button className={styles.button} type="submit">{button}</button>
                        </form>
                    </div>
                </div>
                ) :
                (<div></div>)}
        </div>
    )


}

export const EditToken = observer(EditTokenComponent)