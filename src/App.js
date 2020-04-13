import React from 'react';
import './App.scss';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Navigation />
      <h1 style={{fontWeight:'500', textAlign:'center'}}>COVID19 Status - Philippines</h1>
      <Main />
      <Hero />
    </div>
  );
}

export default App;
