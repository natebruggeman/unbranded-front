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
			// console.log(cartLocal);
			const poppedCart = cartLocal.pop();
			poppedCart.qty = this.state.value
			console.log(poppedCart.qty)
			console.log(poppedCart)

			const updatedCart= [] 

		}
			
	
	render(){
	
		return (
				<span> 
					<Form>
						<Input
							type="text"
							placeholder="1"
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
