import React, { Component } from 'react';
// import { Card, List, Button, i, Grid, Icon, Dropdown, Form } from "semantic-ui-react"
import Header from './Header'
import AddToCart from './AddToCartForm'
import GarmentItem from './GarmentItem'
import PropTypes from 'prop-types';


class Garments extends Component {

	render(){

		console.log(this.props.garments)

		return this.props.garments.map((garment) => (
			<GarmentItem 
				key={garment.id} 
				garment={garment} 
				addToCart={this.props.addToCart}/>
			)
			
		)
	}
}
// proptypes
Garments.propTypes = {
	garments: PropTypes.array.isRequired
}









	// const garments = props.garments
	// console.log(garments)

	// const garmentsList = props.garments.map((garment, i ) =>{
	// 	return <div className= "ui card"> 
			
	// 				<div className="content"> 
	// 					<div className="description">
	// 						<img style={{width: 140, height: 175}} src='https://i.imgur.com/ZKisFVi.png'/> 
	// 						<br/>{garment.colorName} 
	// 					</div>
	// 					<div className="extra content">
	// 					<i className="dollar sign icon"></i>
	// 						{Math.round((garment.piecePrice *2))}.00 
	// 					<br/>
	// 						{i} {garment.sizeName}
	// 					</div>	
 //                  <hr/>
 //                  <AddToCart />

	// 				</div>	
	// 			</div>
					
	// })

 //    return (
 //    	<div>
	//          <h1></h1>
	//          <h4>{garmentsList}</h4>
	         
 //        </div> 
 //      )






// const quantity = [
// { key: 1, text: '1', value: 1},
// { key: 2, text: '2', value: 2},
// { key: 3, text: '3', value: 3},
// { key: 4, text: '4', value: 4},
// { key: 5, text: '5', value: 5}
// ]





// let shoppingCart = []

// const GarmentsList = (props) => {

// 	console.log("this is props in GarmentsList");
// 	console.log(props);//receiving props from App
	

// 	const garments = props.garments

// 	const garmentsList = props.garments.map((garment, i ) =>{
// 		return <div className= "ui card"> 
					
// 					<div className="content"> 
// 						<div className="description">
// 							<img style={{width: 140, height: 175}} src='https://i.imgur.com/ZKisFVi.png'/> 
// 							<br/>{garment.colorName} 
// 						</div>
// 						<div className="extra content">
// 						<i className="dollar sign icon"></i>
// 							{Math.round((garment.piecePrice *2))}.00 
// 						<br/>
// 							{i} {garment.sizeName}
// 						</div>	

//                   <hr/>
//                   <AddToCart />

// 					</div>	
// 				</div>
					
// 	})


//     return (
//     	<div>
// 	         <h1></h1>
// 	         <h4>{garmentsList}</h4>
	         
//         </div> 
//       )
// }

export default Garments;




















	// addToCart = (qty) => {
	// 	console.log(qty)
	// }

	
	// const greenList = props.greenList.map((elem)=>{
	// 	return <div>	
	// 				{elem.sizeName}
	// 			</div>
	// })	

	// const maroonList = props.maroonList.map((elem)=>{
	// 	return <div>Maroon {elem.sizeName}</div>
	// })

	// console.log("this is props.ashList >>> ",props.ashList)
	// console.log("this is props.greenList >>> ",props.greenList)	
	// console.log("this is props.maroonList >>> ",props.maroonList)

	// console.log(props.greenList)