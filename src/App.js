import React from 'react';

import MarketsContainer from './containers/MarketsContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import desktopImage from './styles/images/farm_market_background.jpg';
import {Navigation} from './components/Navigation'




const App = () => {
  
//returning JSX instead of regular html  It is a syntax extension to JavaScript
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

// fetchAccounts ability to dispatch new actions to store directly to component