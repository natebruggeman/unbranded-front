import React, {useEffect, useState } from 'react';
import './App.css';
import {Garments} from "./Compenents/Garments"
import {AddToCart} from "./Compenents/AddToCart"
import { Container } from "semantic-ui-react"
// import FormComponent from "./Compenents/FormComponent"

function App() {
  const [garments, setGarments] = useState([]);

  useEffect(() => {
    fetch('/list').then(response => response.json().then(data => {
      setGarments(data);
    })
    );
  }, [])

console.log(garments);

  // const [newCart, setNewCart] = useState([]);

  // useEffect(() => {
  //   fetch('/<id>').then(response => response.json().then(data => {
  //     setGarments(data);
  //   })
  //   );
  // }, [])


  return (
    <div className="App">
    <Container style ={{marginTop: 50 }}>


      <Garments garments={garments} />

    </Container>  
    </div>
  );
}

export default App;
