import React from 'react';

import './App.css';

import Footer from './components/Footer';
import ExponentialGrowth from './components/ExponentialGrowth';
import References from './components/References';
import Emoji from './components/Emoji';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="heading centerText"><Emoji symbol="😷" label="mask" /> How dangerous is COVID-19?</h1>
        
        <div className="body">
        <span className="alignLeft">
          <p>Is the Corona Virus (COVID-19) overhyped by the media? Isn't it another flu?</p>
          <p>NO & NO. <span className="variable">So what is the big deal?</span> Well for starters, we don't have a vaccine or cure for COVID-19 yet. Secondly, the number of cases of COVID-19 are growing exponentially. Unfortunately the average human brain isn't wired to visualize exponential math very well. Don't worry, I got you covered!</p> </span> <p><Emoji symbol="👇" label="below"/>Try the calculator below to get a feel of what exponential math is<Emoji symbol="👇" label="below"/></p>

          <ExponentialGrowth />
          <br/>
          
          <br/>
          <References />
          
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
