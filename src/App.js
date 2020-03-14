import React from 'react';

import './App.css';
import ExponentialGrowth from './components/ExponentialGrowth';
import References from './components/References';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="centerText">How dangerous is nCovid-19?</h1>
        <div className="body">

          <p>Thousands more have died from Flu and traffic accidents so why is the Corona Virus (nCoVid-19) dangerous? Because we've only seen the tip of the iceberg.</p>
          <p>Insert stuff about exponential growth here</p>
          <ExponentialGrowth/>
          <References/>
          
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
