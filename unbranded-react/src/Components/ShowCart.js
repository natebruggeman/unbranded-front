import React, { Component } from 'react'
import ShowCartItem from './ShowCartItem'
import EditCartQty from './EditCartQty'



class ShowCart extends Component {
	render(){
		// console.log(this.props)
		return this.props.cart.map((item) => (
			<React.Fragment>
				<ShowCartItem 
					item= {item} 
					deleteItem = {this.props.deleteItem}// lifting from showCartItem
				/>
				<EditCartQty 
					item = {item}
					editCartQty = {this.props.editCartQty}
				/>
			</React.Fragment>	

		))
	}
}

export default ShowCart




