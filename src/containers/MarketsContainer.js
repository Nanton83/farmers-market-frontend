import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchMarkets} from '../actions/fetchMarkets'
import Markets from '../components/Markets'
import Market from '../components/Market'
import MarketForm from '../components/MarketForm'


class MarketsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchMarkets()
    }

    render(){
        return(
            <div>
                {/* Routing to different components */}
                <Route path='/markets/new' component={MarketForm}/>
                <Route path='/markets/:id' render={(routerProps) => <Market {...routerProps} markets={this.props.markets}/> } />
                {/* routerProps will automatically add routerprops into component (path, url params/dynamic path) */}
                <Route exact path='/markets' render={(routerProps) => <Markets {...routerProps} markets={this.props.markets}/> } />
                {/* // Render takes in function, pass in component */}
                {/* exact keyword, only show component if path exactly matches  */}
            
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

// fetchMarkets is equivelent to mapDispatchToProps