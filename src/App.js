import React, {Suspense, lazy} from 'react';

import './App.css';

import Footer from './components/Footer';

const ExponentialGrowth = lazy(()=> import('./components/ExponentialGrowth'));
const References = lazy(() => import('./components/References'));

const YouTubeEmbed = lazy(() => import('./components/YouTubeEmbed'));

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="heading centerText">😷 How dangerous is COVID-19?</h1>
        
        <div className="body">
          <p>Is the Corona Virus (COVID-19) overhyped by the media? Isn't it another flu?</p>
          <p>NO & NO. <span className="variable">So what is the big deal?</span> Well for starters, we don't have a vaccine or cure for COVID-19 yet. Secondly, the number of cases of COVID-19 are growing exponentially. Unfortunately the average human brain isn't wired to visualize exponential math very well. Don't worry, I got you covered!</p> <p>👇Try the calculator below to get a feel of what exponential math is👇</p>
          <Suspense fallback={<div>Loading...</div>}>
          <ExponentialGrowth />
          <br/>
          <YouTubeEmbed/>
          <br/>
          <References />
          </Suspense>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
