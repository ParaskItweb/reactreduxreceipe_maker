import React from 'react';
import './Cart.css';
const Cart = (props) => {
	
	return (
		<div className='cart_div'>
			{props.addToCart.map((cartItem,index) => {				
				return (
					<div className='cartItems' key={index}>
						<div className='itemUnit'>
							<span>{cartItem.name} : </span>
							<span>{cartItem.amount.us.value + ' ' + cartItem.amount.us.unit}</span>
						</div>
						<div className='itemAmount'>
							<span>Amount : {cartItem.amount.metric.value + '/-'} </span>
						</div>
						<button type='button' onClick={()=>{props.getCartIndex(cartItem.name)}}>Delete</button>
					</div>
				);
			})}
		</div>
	);
};
export default Cart;