// functional component present list of markets

import React from 'react'
import {Route, Link} from 'react-router-dom'
import Market from './Market'

const Markets = (props) => {

    return (
        <div>
            {props.markets.map(market => 
            // pass in key when iterating to avoid warnings
            <li key={market.id}>
                <Link to={`/markets/${market.id}`}>{market.name}</Link>
                {/* Any props form click come from route */}
                </li> )}
            {/*  create market component accepting market as props */}
        </div>
    )

}

export default Markets