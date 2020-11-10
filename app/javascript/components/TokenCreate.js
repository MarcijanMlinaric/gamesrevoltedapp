import React from 'react'
import { observer } from 'mobx-react'
import styles from '../styles/UserHome.module.css'

function TokenCreateComponent(props) {

    const onButtonClickHandler = (e) => {
        props.onButtonClick(e)
    }

    return (
        <button className={styles.createButton} onClick={onButtonClickHandler}>GENERATE NEW TOKEN</button>
    )

}


export const TokenCreate = observer(TokenCreateComponent)