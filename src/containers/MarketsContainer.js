import React from 'react'
import {connect} from 'react-redux'
import {fetchMarkets} from '../actions/fetchMarkets'
import Markets from '../components/Markets'
import MarketForm from '../components/MarketForm'


class MarketsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchMarkets()
    }

    render(){
        return(
            <div>
            <MarketForm/><br></br>
            <Markets markets={this.props.markets}/>
            {/* Sending to markets component */}
            </div>
        )
    }
}

// gives us access to see what is already in store
const mapStateToProps = state => {
    return {
        markets: state.markets
    }
}


export default connect(mapStateToProps, {fetchMarkets})(MarketsContainer)