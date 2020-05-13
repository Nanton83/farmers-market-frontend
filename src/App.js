import React from 'react';
import {connect} from 'react-redux'
import MarketsContainer from './containers/MarketsContainer'


class App extends React.Component {

  componentDidMount(){
  }

  render() {
    return (
      <div className="App">
       <MarketsContainer/>
       {/* <MarketForm/> */}
      </div>
    );
  }
}

// gives us access to see what is already in store
// const mapStateToProps = (state) => {

// }



export default connect()(App);

// fetchAccounts ability to dispatch new actions to store directly to compoenent