import React from 'react';

import './App.css';
import ExponentialGrowth from './components/ExponentialGrowth';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="centerText">How dangerous is nCovid-19?</h1>
        <div className="body block fixed">

          <p>Thousands more have died from Flu and traffic accidents so why is the Corona Virus (nCoVid-19) dangerous? Because we've only seen the tip of the iceberg.</p>
          <p>Insert stuff about exponential growth here</p>
          <ExponentialGrowth/>
        </div>
      </div>
    );
  }
}

export default App;
