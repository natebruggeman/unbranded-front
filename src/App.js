import React, { Component } from 'react';
import './App.css';
// useEffect, useState,
// import {Garments} from "./Compenents/Garments"
// import {AddToCart} from "./Compenents/AddToCart"
// import { Container } from "semantic-ui-react"
import Garments from "./Components/Garments"
import Header from "./Components/Header"
import ShowCart from "./Components/ShowCart"
import EditCartQty from "./Components/EditCartQty"




class App extends Component {
  constructor(){
    super();
    //storing cart in local storage not in DB 
    let totalCart = localStorage.getItem('cartLocal')
    console.log(totalCart)
    if (totalCart == null){
      totalCart = []
    } else {
      totalCart = JSON.parse(totalCart)
    }

    this.state = {
      garments: [],
      cart: totalCart
    }
  }

  getGarments = async () => {

    try {
      const garments = await fetch('http://localhost:8000/list');
      const garmentsJson = await garments.json();

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
  // these args are what we get from GarmentItem
  addToCart = (gtin, sizeName, colorName, piecePrice) => {
    // pushing to cart 
    console.log(this.state.cart);
    this.state.cart.push({'identifier': gtin,
                          'size': sizeName,
                          'color': colorName,
                          'price': piecePrice,
                           'qty': "1"} )
    //this is the start of cartLocal
    //local storage turns everything into an object. You have to stringify.
    localStorage.setItem('cartLocal', JSON.stringify(this.state.cart))
    window.location.reload()
  }

  // editing quantity in cart 
  // editCartQty = (identifier) => {
  //   //parsing
  //   // console.log(this.value)
  //   let parsedCartLocal = JSON.parse(localStorage.cartLocal)
  //   //filter to match id
  //   let cartLocal = parsedCartLocal.filter(parsedCartLocal => parsedCartLocal.identifier === identifier)
    
  //   const poppedCart = cartLocal.pop();
    
  //   poppedCart.qty = 4

  //   const updatedCart= []
  //   updatedCart.push(poppedCart)
  //   console.log(updatedCart)

    

  // }

  //DELETE FROM CART
  deleteItem = (identifier) => {
    window.location.reload()
    let parsedCartLocal = JSON.parse(localStorage.cartLocal)

    //filters out the id of the one we don't want
    let cartLocal = parsedCartLocal.filter(parsedCartLocal => parsedCartLocal.identifier !== identifier)
    // reset item in localstorage
    localStorage.setItem('cartLocal', JSON.stringify(cartLocal))
  }

  render() {
    return (
      <div>

        <Header />

          <ShowCart 
            cart={this.state.cart} 
            deleteItem = {this.deleteItem}
            editCartQty = {this.editCartQty}

            />

        {this.state.garments.length > 0
          ?
          <Garments 
            garments={this.state.garments} 
            addToCart={this.addToCart}
          />
          :
          null
        }
      
      </div>
    );
  }
}

export default App;



      // const ashList = garmentsJson.filter(function(garment) {
      //   if(garment.colorName === 'Ash'){
      //     return true;
      //   }
      // })


      // const maroonList = garmentsJson.filter(function(garment) {
      //   if(garment.colorName === 'Maroon'){
      //     return true;
      //   }
      // })  



      // const greenList = garmentsJson.filter(function(garment) {
      //   if(garment.colorName === 'Military Green'){
      //     return true;
      //   }
      // })  






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





