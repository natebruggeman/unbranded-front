import React from 'react';
import { List, Header, Button, i, Grid, Icon, Dropdown, Form } from "semantic-ui-react"


// const sizes = [
// { key: 1, text: 'X-small', value: 1},
// { key: 2, text: 'Small', value: 2},
// { key: 3, text: 'Medium', value: 3},
// { key: 4, text: 'Large', value: 4},
// { key: 5, text: 'X-Large', value: 5}
// ]


const quantity = [
{ key: 1, text: '1', value: 1},
{ key: 2, text: '2', value: 2},
{ key: 3, text: '3', value: 3},
{ key: 4, text: '4', value: 4},
{ key: 5, text: '5', value: 5}
]



// if color name is the same as one already displayed 











// let cart = []
// export const Garments = ({ garments }) => {
// 	return (
// 		<Grid columns={3} padded divided>
// 		<div>
// 			<React.Fragment>
// 				<Button onClick= {console.log('This is the cart')}>
// 					<i class="huge cart icon" />
// 				</Button>
// 			</React.Fragment>
// 		</div>	
// 			{garments.map(garment => {
// 				return(



// 					<List.Item 
// 						style= {{marginBottom: 20}}
// 						key={garment.gtin} 
// 						key={garment.colorName} 
// 						key={garment.sizeName} 
// 						key={garment.piecePrice} 
// 						key={garment.colorFrontImage}> 

// 						<div class = "ui card">

// 							<div class= "image">
// 								<img src= "https://www.ssactivewear.com/{garment.colorFrontImage}"/>
// 							</div>


							
// 							{garment.colorName}<br/>
// 							{garment.sizeName}<br/>
// 							{garment.gtin}<br/>

							
// 							<span>
// 								<div class="header">
// 								<i class="dollar sign icon"></i>
// 								{Math.round((garment.piecePrice *2))}
// 								</div>
// 							</span>

// 							<div>

// 								<Form>
// 									<Form.Field>
// 										<Dropdown 
// 											style={{width: 30}}
// 											placeholder= "sizes" 
// 											options= {garment.sizeName}
// 											text= {garment.sizeName}
// 											selection
// 										/>
// 									</Form.Field>

// 									<Form.Field>
// 										<Dropdown 
// 											style={{width: 30}}
// 											placeholder= "colors" 
// 											options= {garment.colorName}
// 											text= {garment.colorName}
// 											selection
// 										/>
// 									</Form.Field>
// 									<Form.Field>
// 										<Dropdown 
// 											style={{width: 30}}
// 											placeholder= "Quantity" 
// 											options= {quantity}
// 											selection
// 										/>
// 									</Form.Field>

// 									<Button onClick={ async () => {
// 										console.log('~~~~~~~~~~~~this is cart~~~~~~~~~~~~')
// 										console.log(cart)
// 										console.log(garment.gtin)

// 										cart.push({"gtin": garment.gtin,
// 											"qty": {quantity}})
// 									}}

// 										animated='fade' style= {{marginBottom: 10}}>
// 									    <Button.Content visible>Add to <Icon name='cart' /></Button.Content>
// 									    <Button.Content hidden> Yeah Baby! </Button.Content>
// 									</Button>

// 									<br/>
// 								</Form>	


// 							</div>    
// 						</div>

		
// 					</List.Item>
// 					)
// 			})}

// 		</Grid>

// 	)
// }