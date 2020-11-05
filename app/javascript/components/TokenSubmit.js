import React from 'react'
import { observer } from 'mobx-react'

function TokenSubmitComponent (props) {
    
    const onSubmitHandler = (e) => {
        e.preventDefault()
        props.submitToken(e.target[0].value)
        e.target[0].value = ''
    }


    return (
        <form onSubmit={onSubmitHandler}>
            <input type="text" pattern='[0-9]*' minLength={10} maxLength={10} placeholder="TOKEN ID"/>
            <button type='submit'>Activate token</button>
        </form>
        
    )


}


export const TokenSubmit = observer(TokenSubmitComponent)