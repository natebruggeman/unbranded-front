import React, { Component } from 'react';
import {Form, Input, Button, Icon} from 'semantic-ui-react'


// const quantity = [
// { key: 1, text: '1', value: 1},
// { key: 2, text: '2', value: 2},
// { key: 3, text: '3', value: 3},
// { key: 4, text: '4', value: 4},
// { key: 5, text: '5', value: 5}
// ]


class AddToCart extends Component{
	state = {
		qty: '',
		shoppingCart: []
	}

	// onClick = (e) => {
	// 	e.preventDefault();
	// 	this.props.addToCart(this.state.shoppingCart);
	// 	this.setState({ qty: ''});
		
	// }

	onChange = (e) => this.setState({qty: e.target.value})

	render(){
		return(
			<Form onClick={this.onClick}>
				<Input
					type="text"
					name="qty"
					placeholder="How Many?"
					value={this.state.qty}
					onChange={this.onChange}/>

				<Button
					onClick= {this.onClick}
		            animated='fade' 
		            style= {{marginBottom: 10}}>

                      <Button.Content visible>Add to <Icon name='cart' /></Button.Content>
                      <Button.Content hidden> Yeah Baby! </Button.Content>
                  </Button>


			</Form>


			)
		}
	}

export default AddToCart











// export const AddToCart = () => {
// 	const [newCart, setNewCart] = useState('');


// 	return (
// 		<Form>
// 			<Form.Field>
// 				<Dropdown 
// 					style={{width: 30}}
// 					placeholder= "sizes" 
// 					options= {''}
// 					value={newCart} 
// 					onChange={e => setNewCart(e.target.value)}
// 					selection
// 				/>
// 			</Form.Field>

// 			<Form.Field>
// 				<Dropdown 
// 					style={{width: 30}}
// 					placeholder= "colors" 
// 					options= {''}
// 					value={newCart} 
// 					onChange={e => setNewCart(e.target.value)}
// 					selection
// 				/>
// 			</Form.Field>
// 			<Form.Field>
// 				<Dropdown 
// 					style={{width: 30}}
// 					placeholder= "quantity" 
// 					options= {quantity}
// 					value={newCart} 
// 					onChange={e => setNewCart(e.target.value)}
// 					selection
// 				/>
// 			</Form.Field>

// 			<br/>
// 		</Form>	


// 		)








// }










