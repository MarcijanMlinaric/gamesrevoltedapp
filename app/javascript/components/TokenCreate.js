import React from 'react'
import { observer } from 'mobx-react'

function TokenCreateComponent (props) {

    const onButtonClickHandler = (e) => {
        props.onButtonClick(e)
    }

    return (
        <button onClick={onButtonClickHandler}>GENERATE NEW TOKEN</button>
    )

}


export const TokenCreate = observer(TokenCreateComponent)