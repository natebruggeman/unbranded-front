import React, { Component } from 'react'
import {Button} from "semantic-ui-react"
import EditCartQty from './EditCartQty'




class ShowCartItem extends Component {
	render(){
		return (
				<div> 
					<h4> 

						{/* cart details */}
						{this.props.item.color}     || 
						{this.props.item.size}      ||
						{Math.round(this.props.item.price) * 2}.00     ||
						{/*this.props.item.qty*/}
						
						<Button 
							style={{backgroundColor: '#A10000'}}
							onClick={this.props.deleteItem.bind(this, this.props.item.identifier)}
							
						>
							X

						</Button>
						
					</h4>
				</div>
		)
	}
}

export default ShowCartItem
