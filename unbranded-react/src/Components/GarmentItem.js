import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Grid, Icon, Form, } from "semantic-ui-react"



class GarmentItem extends Component {

	render(){
		// destructoring to grab id, gtin, sizeName etc.
		const { gtin, sizeName, piecePrice, colorName } = this.props.garment 
		
		return (
			<div style={itemStyle}> 
				<br/>
				<Card>
					{/* can use this.props.garment or destructored constants */}
					{colorName}<br/>
					{this.props.garment.sizeName}<hr/>
					${Math.round(piecePrice) * 2}.00<br/>
					{gtin} 
					<Form>
  						<br/>
						<Button 
							style={{marginBottom: '8px'}}
							onClick={this.props.addToCart.bind(this, gtin, sizeName, colorName, piecePrice)} //climbing the ladder
							value="add to cart"
							animated='fade'
							>
							<Button.Content visible>Add to <Icon name='cart' /></Button.Content>
							<Button.Content hidden> Yeah Baby! </Button.Content>
						</Button>
						
					</Form>	
				</Card>

			</div>
		)
	}
}

//style of the div behind the cars
const itemStyle = {
	backgroundColor: "lightgrey",
	textAlign: 'center'
}











GarmentItem.propTypes = {
	garment: PropTypes.object.isRequired
}


export default GarmentItem


// import React, {Component} from 'react';

// class GarmentItem extends Component {
// 	render(){
// 		return (
// 			<div> </div>
// 		)
// 	}
// }