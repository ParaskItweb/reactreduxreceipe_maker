import React from 'react';
import './ReceiptDetail.css';
import FinalDetails from '../FinalDetails';

const ReceipeDetail = (props) => {
	//console.log(props.showReceipeDetail);

	return (
		<div className='result_details'>
			<div style={{ marginBottom: '60px' }}>
				<div style={{ float: 'right' }}>
					<a title='Add To Wishlist' className='block' onClick={() => props.addToWishList(props.basicDetail.basicData)}>
						<i className='fa fa-gratipay font-icon'  aria-hidden='true' />
					</a>
				</div>
				<div style={{ height: '35px' }}>
					<button
						type='button'
						className='addButton ui green button'
						onClick={() => props.addToList(props.showReceipeDetail)}
					>
						Add To List
					</button>
				</div>
				<div style={{ marginTop: '30px', textAlign: 'left' }}>
					<h5>Title : {props.basicDetail.basicData.title}</h5>
					<h5>Ready In Minutes : {props.basicDetail.basicData.readyInMinutes}</h5>
					<h5>Servings : {props.basicDetail.basicData.servings}</h5>
				</div>
			</div>
			{props.showReceipeDetail.map((details,index) => {
				return (
					<FinalDetails key={index} getIngredients={details} basicRecipeDetails={props.basicDetail} />
				);
			})}
		</div>
	);
};
export default ReceipeDetail;
