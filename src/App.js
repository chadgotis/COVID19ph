import React, {useEffect, useState} from 'react';
import './App.scss';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Hero from './components/Hero';

function App() {
  const [record,setRecord] = useState([]);

      useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          fetch("https://covid19.mathdro.id/api/countries/philippines", requestOptions)
            .then(response => response.json())
            .then(result => setRecord(result))
            .catch(error => console.log('error', error));
    },[])
  return (
    <div className="App">
      <Navigation />
      <h1 style={{fontWeight:'500', textAlign:'center',marginTop:'1rem'}}>COVID19 Status - Philippines</h1>
      <Main record={record} />
      <Hero date={record.lastUpdate} />
    </div>
  );
}

export default App;
