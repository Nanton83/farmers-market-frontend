import React from 'react'
import Markets from '../components/Markets'
import MarketForm from '../components/MarketForm'

class MarketsContainer extends React.Component {

    render(){
        return(
            <div>
            <Markets/>
            <MarketForm/>
            </div>
        )
    }


}

export default MarketsContainer