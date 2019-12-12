import React, { Component } from 'react'
import ShowCartItem from './ShowCartItem'
import EditCartQty from './EditCartQty'



class ShowCart extends Component {
	render(){
	
		return this.props.cart.map((item) => (
			<React.Fragment>
				<ShowCartItem 
					item= {item} //passing
					deleteItem = {this.props.deleteItem}// lifting from showCartItem
				/>
				{/*<EditCartQty  
				 	item = {item} //passing
				 	editCartQty = {this.props.editCartQty} // lifting from EditCart
				 />*/}
			</React.Fragment>	

		))
	}
}

export default ShowCart




