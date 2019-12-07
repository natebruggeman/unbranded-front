import React from 'react';
import { List, Header } from "semantic-ui-react"


export const Garments = ({ garments }) => {
	return (
		<List>
			{garments.map(garment => {
				return(
					<List.Item key={garment.gtin} key={garment.colorName} key={garment.colorFrontImage}> 
						<Header>
							Gtin: {garment.gtin}
							Color: {garment.colorName}  

						</Header>
		
					</List.Item>
					)
			})}

		</List>

	)
}