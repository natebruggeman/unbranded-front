import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Card, List, Button, i, Grid, Icon, Dropdown, Form } from "semantic-ui-react"



class GarmentItem extends Component {

	render(){
		console.log(this.props)
		return (
			<div style={itemStyle}> 
				<br/>
				<Card>
					{this.props.garment.sizeName}<hr/>
					{this.props.garment.gtin} 
					<Button 
						onClick={this.props.addToCart} //climbing the ladder
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