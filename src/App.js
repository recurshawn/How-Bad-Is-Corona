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
          <p>Thousands more have died from Flu and traffic accidents so why is the Corona Virus (COVID-19) dangerous? Because we've only seen the tip of the iceberg.</p>
          <p>Insert stuff about exponential growth here. <br/> <br/> TRY TO KEEP IT SIMPLE AND MINIMAL</p>
          <Suspense fallback={<div>Loading...</div>}>
            <ExponentialGrowth />
          
          <YouTubeEmbed/>
          
          <References />
          </Suspense>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
