import React from 'react'
import { observer } from 'mobx-react'
import { Token } from './Token'
import styles from '../styles/UserHome.module.css'

function TokensComponent(props) {

    return (
        <div className={styles.tokensComponent}>
            <div className={styles.tokensLeft}>{`You have ${props.tokens.length} unused tokens left`}</div>
            {props.tokens.map((token) =>
                <Token key={`token-${token.id}`} token={token} />)}
        </div>
    )


}

export const Tokens = observer(TokensComponent)