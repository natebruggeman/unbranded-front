import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Card, List, Button, i, Grid, Icon, Dropdown, Form } from "semantic-ui-react"



class GarmentItem extends Component {

	render(){
		// destructoring to grab id, gtin, sizeName etc.
		const { gtin, sizeName, piecePrice } = this.props.garment 
		console.log(this.props)
		return (
			<div style={itemStyle}> 
				<br/>
				<Card>
					{/* can use this.props.garment or destructored constants */}
					{this.props.garment.sizeName}<hr/>
					{gtin} 
					<Button 
						onClick={this.props.addToCart.bind(this, gtin, sizeName, piecePrice)} //climbing the ladder
						value="add to cart"
						animated='fade'
						>
						<Button.Content visible>Add to <Icon name='cart' /></Button.Content>
						<Button.Content hidden> Yeah Baby! </Button.Content>
					</Button>
				</Card>

			</div>
		)
	}
}

//style of the div behind the cars
const itemStyle = {
	backgroundColor: "lightgrey"
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