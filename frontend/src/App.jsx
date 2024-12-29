import React from 'react';
import './App.css';
import Header from './components/Header';
import PotatoClassification from './components/PotatoClassification';
import PepperClassification from './components/PepperClassification';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="classification-wrapper">
     <PotatoClassification/>
     <PepperClassification/>
     </div>
    </div>
  );
}

export default App;
