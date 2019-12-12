
import React from 'react'
import { Icon } from "semantic-ui-react"

function Header() {
	return (
		<header style={headerStyle}>
			<h1 >Unbranded Market </h1>
			<h1>
				<Icon 
					name="big shopping cart" 
					onClick= {console.log('future use')}
				/>

			</h1>
		</header>
		)
}

const headerStyle = {
	background: 'navy',
	color: 'white',
	textAlign: 'center',
	padding: '5px'
}




export default Header