import React from 'react'
import { useEffect } from 'react'
import { observer } from 'mobx-react'
import { AppContext } from '../state/AppContext'

import login from '../services/login'


function AppComponent(props) {
    const { appState } = React.useContext(AppContext);
    
    useEffect(() => 
        login('admin', 'admin', appState)
    , [])
    
    console.log(appState)

    return (
        <div>
        {appState.token ?
             (<div>Hello</div>) : 
             (<div>Please log in</div>)}
        </div>
    )
}

export const App = observer(AppComponent);