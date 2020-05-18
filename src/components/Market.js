import React from 'react'


const Market = (props) => {


    let market = props.markets[props.match.params.id - 1]

    return (
        <li>
            {market ? market.name : null} - {market ? market.location : null}
           
        </li>
    )

}

export default Market