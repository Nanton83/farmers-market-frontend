import React from 'react'
import ItemsContainer from '../containers/ItemsContainer'


//rendering one specific market

const Market = (props) => {
  
    let market = props.markets.filter(market => market.id == props.match.params.id)[0]
    // creates an array, good if path needs to be exact to id
    // looking for market.id that is the same as the match.params.id
// debugger

    return (
        <div className="container">
        <h2>
            {market ? market.name : null} - {market ? market.location : null}
           {/* if market exists, render name, or null */}
        </h2>
        <ItemsContainer market={market}/>
        </div>
    )

}

export default Market