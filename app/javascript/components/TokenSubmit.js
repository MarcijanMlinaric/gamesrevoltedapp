import React from 'react'
import { observer } from 'mobx-react'
import styles from '../styles/UserHome.module.css'

function TokenSubmitComponent (props) {
    
    const onSubmitHandler = (e) => {
        e.preventDefault()
        props.submitToken(e.target[0].value)
        e.target[0].value = ''
    }


    return (
        <form className={styles.submitForm} onSubmit={onSubmitHandler}>
            <input className={styles.formInput} type="text" pattern='[0-9]*' minLength={10} maxLength={10} placeholder="TOKEN ID"/>
            <button className={styles.submitButton} type='submit'>Activate token</button>
        </form>
        
    )


}


export const TokenSubmit = observer(TokenSubmitComponent)