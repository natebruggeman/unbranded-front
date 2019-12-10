import React, { Component } from 'react';
import { Card, List, Header, Button, i, Grid, Icon, Dropdown, Form } from "semantic-ui-react"




// class GarmentsList extends Component {
// 	constructor(props){
// 		super(props);

// 		this.state = {
// 			garments: [],
// 			qty: 0
// 		}

// 	}
// }



let shoppingCart = []

const GarmentsList = (props) => {

	console.log("this is props in GarmentsList");
	console.log(props);//receiving props from App
	

	const garments = props.garments

	
	const greenList = props.greenList.map((elem)=>{
		return <div>
					{elem.sizeName}

				</div>

	})	

	const maroonList = props.maroonList.map((elem)=>{
		return <div>{elem.colorName}{elem.sizeName}</div>
	})

	console.log("this is props.ashList >>> ",props.ashList)
	console.log("this is props.greenList >>> ",props.greenList)	
	console.log("this is props.maroonList >>> ",props.maroonList)

	console.log(props.greenList)

	// const garmentsList = props.garments.map((garment, i ) =>{
	// 	return <div className= "ui card"> 
	// 				{i}
	// 				<div className="content"> 
	// 					<div className="description">
	// 						{garment.colorName} <br/>
	// 					</div>
	// 					<div className="extra content">
	// 					<i className="dollar sign icon"></i>
	// 						{Math.round((garment.piecePrice *2))}.00 
	// 					<br/>
	// 						{garment.sizeName}
	// 					</div>	
	// 				</div>	
	// 			</div>

					
	// })


    return (
    	<div>
         <h1>Unbranded Market</h1>
         <h4>{greenList}</h4>
         <h4>{maroonList}</h4>
        </div> 
      )
}

export default GarmentsList;