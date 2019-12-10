import React, { Component } from 'react';
import './App.css';
// useEffect, useState,
// import {Garments} from "./Compenents/Garments"
// import {AddToCart} from "./Compenents/AddToCart"
// import { Container } from "semantic-ui-react"
import GarmentsList from "./Components/GarmentsList"


// function App() {
//   const [garments, setGarments] = useState([]);

//   useEffect(() => {
//     fetch('/list').then(response => response.json().then(data => {
//       setGarments(data);
//     })
//     );
//   }, [])

// console.log(garments);



class App extends Component {
  constructor(){
    super();


    this.state = {
      garments: []
    }
  }
  getGarments = async () => {

    try {
      const garments = await fetch('http://localhost:8000/list');
      const garmentsJson = await garments.json();
      console.log(garmentsJson);
      this.setState({
        garments:garmentsJson
      })
    } catch (err) {
      console.log(err, 'error in catch block')
      return err
    }


  }
  componentDidMount(){
    this.getGarments()
  }
  render() {
    return (
      <div>
        <GarmentsList garments={this.state.garments}/>
      </div>
    );
  }
}

export default App;


// class GarmentList extends Component {
//   constructor(props){
//     super(props);

//     this.state = {
//       garments: [],
//       gtin: [],
//       size: [],

//     }
//   }
//   componentDidMount(){
//     this.getGarments();
//   }
//   getGarments = async () => {
//     try {
//     const garments = await fetch(process.env.REACT_APP_API_URL + '/list', {
//       credentials: 'include'
//     });
//     const parsedGarments = await garments.json();
//     console.log(parsedGarments);

//     this.setState({
//         garments: parsedGarments.data
//       })

//     } catch(err){
//       console.log(err);
//     }
//   }

// }


















// class Heyo extends Component {

//   render() {
//     return (
//       <div className="App">
//         <Login/>
//       </div>
//     );
//   }
// }

// export default Heyo


// class HelloContainer extends Component {
//   constructor(props){
//     super()
//     this.state = {
//       counter: 13,
//       backwards: 89
//     }
//   }
//   handleClick = (e) => {
//     this.setState({
//       counter: this.state.counter + 1
      
//     })
//   }
//   handleBackwards = (e) => {
//     this.setState({
//       backwards: this.state.backwards - 1
//     })
//   }

//   render () {
//     return (
//       <div>
//         <h1>Hello {this.props.name}!</h1>
//         <h2>You are {this.props.age} years old</h2>
//         <h2>The count is {this.state.counter} </h2>
//         <h2>The count is {this.state.backwards} </h2>
//         <button onClick={this.handleClick}> YO MAMA </button>
//         <button onClick={this.handleBackwards}> hot singles </button>
//       </div>
//     )
//   }
// }

// export default HelloContainer



// class TrainContainer extends Component {
//   constructor(){
//     super();

//     this.state = {
//       trains: [{
//         stationName: 'Colorado',
//         platform: 1,
//         delayed: false
//       },
//       {
//         stationName: 'Spain',
//         platform: 2,
//         delayed: false
//       },
//       {
//         stationName: 'California',
//         platform: 3,
//         delayed: false
//       },
//       {
//         stationName: 'Chicago',
//         platform: 4,
//         delayed: false
//       }
//       ]
//     }
//   }

//   handleDelay = (delayedTrain) => {
//     console.log('handleDelay happening')

//     const newTrainArray = this.state.trains.map((train) => {
//       if(train.stationName === delayedTrain.stationName){
//         train.delayed = !train.delayed
//       }
//       return train
//     });

//     this.setState({
//       trains: newTrainArray
//     });
//   }
//   render(){
//     return (
//         <TrainList booty={this.state.trains} waitboy={this.handleDelay}/>
//       )
//   }
// }

// export default TrainContainer











// class GarmentContainer extends Compenent {  
//     constructor(props){
//       super(props);

//       this.state = {
//         garments: []

//       }

//     }

//     componentDidMount(){
//       this.getGarments();
//     }

//     getGarments = async () => {
//       try {garments = await fetch(process.env.REACT_APP_API_URL + '/list/', {
//         credentials: 'include'
//       });
//       const parsedGarments = await garments.json();
//       console.log(parsedGarments)
//       this.setState({
//         garments: parsedGarments.data
//       })
//     } catch(err){
//       console.log(err);
//     }
//     render(){
//       return (
//         "I'm Garment Container"
//         )
//     }
//   }
// }

// export default GarmentContainer

// import React, { Component } from 'react';

// class DogContainer extends Component {
//   constructor(props){
//     super(props);

//     this.state = {
//       dogs: []
//     }
//   }
//   componentDidMount(){
//     this.getDogs();
//   }
//   getDogs = async () => {

//     try {
//       const dogs = await fetch(process.env.REACT_APP_API_URL + '/api/v1/dogs/');
//       const parsedDogs = await dogs.json();
//       console.log(parsedDogs);
//       this.setState({
//         dogs: parsedDogs.data
//       })
//     } catch(err){
//       console.log(err);
//     }
//   }
//   render(){
//     return (
//       "I'm the dogContainer"
//       )
//   }
// }

// export default DogContainer

  // const [newCart, setNewCart] = useState([]);

  // useEffect(() => {
  //   fetch('/<id>').then(response => response.json().then(data => {
  //     setGarments(data);
  //   })
  //   );
  // }, [])


//   return (
//     <div className="App">
//     <Container style ={{marginTop: 50 }}>


//       <Garments garments={garments} />

//     </Container>  
//     </div>
//   );
// }

// export default App;
