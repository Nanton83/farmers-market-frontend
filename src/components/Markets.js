// functional component present list of markets

import React from 'react'
import {Route, Link} from 'react-router-dom'

import '../styles/App.css';




const Markets = (props) => {

    return (
        <div className="container">
            <h1 className="centerform">Produce Markets</h1>
            <div>
                {props.markets.map(market => 
                // pass in key when iterating to avoid warnings
                <li key={market.id}>
                    <Link to={`/markets/${market.id}`}>{market.name}</Link>
                    {/* Any props form click come from route */}
                    </li> )}
                {/*  create market component accepting market as props */}
            </div>
        </div>
    )

}

export default Markets