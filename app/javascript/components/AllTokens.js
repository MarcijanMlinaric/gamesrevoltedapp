import React from 'react'
import { observer } from 'mobx-react'
import { TokenAdmin } from './TokenAdmin'
import styles from '../styles/AdminHome.module.css'

function AllTokensComponent(props) {

    return (
        <div className={styles.page}>
            <div className={styles.title}>Tokens:</div>
            <div className={styles.container}>
                {props.tokens.map((token) =>
                    <TokenAdmin key={`token-${token.id}`} token={token} history={props.history}
                        user={props.users.find(({ id }) => id == token.attributes.user_id)} />)}
            </div>
        </div>
    )
}

export const AllTokens = observer(AllTokensComponent)