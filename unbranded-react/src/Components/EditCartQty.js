import React, { Component } from 'react'
import { Input, Form, Button } from "semantic-ui-react"



class EditCartQty extends Component {
	state ={
		value: ''
	}
		onChange = (e) => this.setState({ value: e.target.value})

		editCartQty = (e) => {
			let parsedCartLocal = JSON.parse(localStorage.cartLocal)
			// console.log(parsedCartLocal)
			// console.log(this.props.item.identifier)
			let cartLocal = parsedCartLocal.filter(parsedCartLocal => parsedCartLocal.identifier === this.props.item.identifier)
			console.log(cartLocal)
			console.log('~~~~~~~~~~~~~~')

			// pop it out of it's array
			const poppedCart = cartLocal.pop();
			// put qty as value
			poppedCart.qty = this.state.value
			
			const updatedCart= [] 
			updatedCart.push(poppedCart)
			cartLocal.push(updatedCart)
			console.log(cartLocal)
			
			// localStorage.setItem('cartLocal', JSON.stringify(cartLocal))
			


		}
			
	
	render(){
	
		return (
				<span> 
					<Form>
						<Input
							type="text"
							placeholder={this.state.value}
							style={{width: "60px"}}
							// onChange = {this.onChange}
							value= {this.state.value}
							onChange={this.onChange}
						> 
						</Input>
						<Button
							onClick={this.editCartQty}
							// {this.props.editCartQty.bind(this, this.props.item.identifier)}
							>
							More!
						</Button>
					</Form>	
				</span>
		)
	}
}

export default EditCartQty


//   editCartQty = (identifier) => {
    //parsing
    // let parsedCartLocal = JSON.parse(localStorage.cartLocal)
    // //filter to match id
    // let cartLocal = parsedCartLocal.filter(parsedCartLocal => parsedCartLocal.identifier === identifier)
    
    // const poppedCart = cartLocal.pop();
    
    // poppedCart.qty = 4

    // const updatedCart= []
    // updatedCart.push(poppedCart)
    // console.log(updatedCart)
