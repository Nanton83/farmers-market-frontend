// functional component present list of markets

import React from 'react'
import Market from './Market'

const Markets = (props) => {

    return (
        <div>
            {props.markets.map(market => 
            // pass in key when iterating to avoid warnings
            <div key={market.id}><Market market={market}/></div> )}
            {/*  create market component accepting market as props */}
        </div>
    )

}

export default Markets