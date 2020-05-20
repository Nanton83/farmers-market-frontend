import React from 'react'
import {Redirect} from 'react-router-dom'
import ItemsContainer from '../containers/ItemsContainer'


//rendering one specific market

const Market = (props) => {


    // let market = props.markets[props.match.params.id - 1]
    // using router props and props passed in
    
    let market = props.markets.filter(market => market.id == props.match.params.id)[0]
    // creates an array, good if path needs to be exact to id


    return (
        <div>
        <h2>
            {market ? market.name : null} - {market ? market.location : null}
           {/* if market exists, render name, or null */}
        </h2>
        <ItemsContainer market={market}/>
        </div>
    )

}

export default Market