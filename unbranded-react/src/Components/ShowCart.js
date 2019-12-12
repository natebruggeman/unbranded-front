import React, { Component } from 'react'
import ShowCartItem from './ShowCartItem'



class ShowCart extends Component {
	render(){
		return this.props.cart.map((item) => (
			<ShowCartItem item= {item} />

		))
	}
}

export default ShowCart







				// {this.props.cart.length}
				// {this.props.cart[i].color} {'       '} || {'    '}
				// {this.props.cart[i].size} {'       '} || {'    '}
				// {this.props.cart[i].qty} {'       '} || {'    '}



