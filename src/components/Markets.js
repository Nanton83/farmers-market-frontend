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
            <div class="col-sm-12 text-center">
                {props.markets.map(market => 
                // pass in key when iterating to avoid warnings
                <div key={market.id}>
                    <Link to={`/markets/${market.id}`} style={{ textDecoration: 'none' }}><Button variant="btn btn-info my-4 btn-block">{market.name}</Button></Link>
                </div> )}
            </div>
            </div><br/>
        </div>
    )

}

export default Markets