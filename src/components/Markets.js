// functional component present list of markets

import React from 'react'


const Markets = (props) => {

    return (
        <div>
            {props.markets.map(market => 
            // pass in key when iterating to avoid warnings
            <li key={market.id}>{market.name} - {market.location}<br></br></li>
            )}
        </div>
    )

}

export default Markets