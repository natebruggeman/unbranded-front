import React, {useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Garments} from "./Compenents/Garments"


function App() {
  const [garments, setGarments] = useState([]);

  useEffect(() => {
    fetch('/list').then(response => response.json().then(data => {
      setGarments(data);
    })
    );
  }, [])

console.log(garments);


  return (
    <div className="App">
      <Garments garments={garments} />
    </div>
  );
}

export default App;
