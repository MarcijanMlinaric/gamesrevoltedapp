import React from 'react'
import { observer } from 'mobx-react'

function CreateUserFormComponent (props) {

    const onSubmitHandler = (e) => {
        e.preventDefault()
        props.onCreateUser(e)
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input placeholder='Username' />
            <input placeholder='Password' />
            <input defaultValue={10} placeholder='Number of allowed tokens' />
            <input defaultValue={0} placeholder='Balance' />
            <button type="submit">Create user</button>
        </form>

    )


}

export const CreateUserForm = observer(CreateUserFormComponent)