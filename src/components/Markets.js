// functional component present list of markets

import React from 'react'
import {Route, Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import '../styles/App.css';
// import Counter from '../components/Counter'




const Markets = (props) => {

    return (
        <div className="container">
            <h1 className="centerform">Produce Markets</h1><br/>
            <div class="row">
            <div class="col-sm-12">
                {props.markets.map(market => 
                // pass in key when iterating to avoid warnings
                
                <ul key={market.id}>
                    <Link to={`/markets/${market.id}`}><Button variant="outline-secondary">{market.name}</Button></Link>
                    {/* Any props form click come from route */}
                    </ul> )}
            </div>
            </div>
        </div>
    )

}

export default Markets