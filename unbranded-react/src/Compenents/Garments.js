import React from 'react';
import { List, Header, Button, i, Grid } from "semantic-ui-react"


export const Garments = ({ garments }) => {
	return (
		<Grid columns={3} padded divided>
			{garments.map(garment => {
				return(
					<List.Item key={garment.gtin} key={garment.colorName} key={garment.piecePrice} key={garment.colorFrontImage}> 
						<div class = "ui card">
							<div class= "image">
								<img src= "https://www.ssactivewear.com/{garment.colorFrontImage}"/>
							</div>


							
							{garment.colorName}<br/>
							
							<span>
								<div class="header">
								<i class="dollar sign icon"></i>
								{Math.round((garment.piecePrice *2))}
								</div>
							</span>

							<Button>Sup</Button>
						</div>

		
					</List.Item>
					)
			})}

		</Grid>

	)
}