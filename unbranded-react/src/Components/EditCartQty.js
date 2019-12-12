import React, { Component } from 'react'
import { Input, Form, Button } from "semantic-ui-react"



class EditCartQty extends Component {
	render(){
	console.log(this.props.item.identifier)
		return (
				<span> 
					<Form>
						<Input
							type="text"
							placeholder="1"
							style={{width: "60px"}}
						> 
						</Input>
						<Button
							onClick={this.props.editCartQty.bind(this, this.props.item.identifier)}
							>
							More!
						</Button>
					</Form>	
				</span>
		)
	}
}

export default EditCartQty