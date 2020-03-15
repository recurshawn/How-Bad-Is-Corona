import React from 'react';

import './App.css';
import ExponentialGrowth from './components/ExponentialGrowth';
import References from './components/References';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="heading centerText">How dangerous is nCovid-19?</h1>
        <div className="circle-plus-1">
            <div className="circle rotate">
              <div className="horizontal"></div>
              <div className="vertical"></div>
            </div>
          </div>
        <div className="body">
          <p>Thousands more have died from Flu and traffic accidents so why is the Corona Virus (nCoVid-19) dangerous? Because we've only seen the tip of the iceberg.</p>
          <p>Insert stuff about exponential growth here</p>
          <ExponentialGrowth />
          </div>
          <div className="circle-plus-2">
            <div className="circle rotate">
              <div className="horizontal"></div>
              <div className="vertical"></div>
            </div>
          </div>
          <div className="body">
          <div className="block fixed">
            <p>I recommend watching this video by 3blue1brown (an amazing channel), especially if you want to gain a better intuition for the math behind epidemics.</p>
            <div className="iframe-container">
              <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Kas0tIxDvrg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            </div>
          </div>
          <References />

        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
