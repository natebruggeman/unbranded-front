import React, { Component } from 'react'
import { Input, Form, Button } from "semantic-ui-react"



class EditCartQty extends Component {
	render(){
		return (
				<span> 
					<Form>
						<Input
							type="text"
							placeholder="1"
							style={{width: "60px"}}
						> 
						</Input>
						<Button>
							More!
						</Button>
					</Form>	
				</span>
		)
	}
}

export default EditCartQty