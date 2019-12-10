import React from 'react';
import { Card, List, Header, Button, i, Grid, Icon, Dropdown, Form } from "semantic-ui-react"


let shoppingCart = []

const GarmentsList = (props) => {
	// console.log(props);//receiving props from App

	// const garmentList = props.garments.filter() => {
	// 	return
	// })


	const garmentsList = props.garments.map((garment, i ) =>{
		return <div className= "ui card"> 
					{i}
					<div className="content"> 
						<div className="description">
							{garment.colorName} <br/>
						</div>
						<div className="extra content">
						<i className="dollar sign icon"></i>
							{Math.round((garment.piecePrice *2))}.00 
						<br/>
							{garment.sizeName}
						</div>	
					</div>	
				</div>

					
	})

	console.log(garmentsList)

    return (
    	<div>
         <h1>Unbranded Market</h1>
         <h4>{garmentsList}</h4>
        </div> 
      )
}

export default GarmentsList;