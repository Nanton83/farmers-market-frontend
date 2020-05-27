import React from 'react';
import {connect} from 'react-redux'
import MarketsContainer from './containers/MarketsContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import desktopImage from './styles/images/farm_market_background.jpg';
import {Navigation} from './components/Navigation'




const App = () => {
  

  return (
      <div className="App" style={{backgroundImage: `url(${desktopImage})` }}>
        <Navigation />
          <div className="App-content">
          
          <MarketsContainer/>
          </div>
      </div>
  );
};

export default App;

// fetchAccounts ability to dispatch new actions to store directly to compoenent