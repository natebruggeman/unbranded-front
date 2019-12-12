import React, { Component } from 'react'




class ShowCartItem extends Component {
	render(){
		return (
				<div> 
					<h4> 
						{this.props.item.color}     ||
						{this.props.item.size}      ||
						{this.props.item.price}     ||
						{this.props.item.qty}
					</h4>
				</div>
		)
	}
}

export default ShowCartItem
