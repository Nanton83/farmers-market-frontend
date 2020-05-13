import React from 'react';

import MarketsContainer from './containers/MarketsContainer'


class App extends React.Component {

  

  render() {
    return (
      <div className="App">
       <MarketsContainer/>
      </div>
    );
  }
}

export default App;

// fetchAccounts ability to dispatch new actions to store directly to compoenent