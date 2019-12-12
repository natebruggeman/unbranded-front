import React, { Component } from 'react'
import ShowCartItem from './ShowCartItem'



class ShowCart extends Component {
	render(){
		return this.props.cart.map((item) => (
			<ShowCartItem 
				item= {item} 
				deleteItem = {this.props.deleteItem}// lifting from showCartItem

			/>

		))
	}
}

export default ShowCart




