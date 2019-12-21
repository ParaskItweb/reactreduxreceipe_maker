import React from 'react';
import './index.css';
const WishList = (props) => {
	return (
		<div className='sCart'>
			{props.wishListData.map((data,index) => {
				return <span key={index} className='cartItem'>{data.title}</span>;
			})}
		</div>
	);
};
export default WishList;
