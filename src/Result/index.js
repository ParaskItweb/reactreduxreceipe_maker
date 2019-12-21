import React from 'react';
import './Result.css';
const Result = (props) => {
	const getReceipeId = (id) => {
		props.setReceipeID(id);
	};
	return (
		<div className='res_div' onClick={() => getReceipeId(props.receipeDetails)}>
			<div>
				<h3>{props.receipeDetails.title}</h3>
			</div>
			<div className='result_img_div'>
				<img
					src={`https://spoonacular.com/recipeImages/${props.receipeDetails.id}-240x150.jpg`}
					alt='Receipe Item'
					className='result_img'
				/>
			</div>
			<div className='mg_bt_10'>
				<h5>Receipe ID : {props.receipeDetails.id}</h5>
			</div>
			<hr />
		</div>
	);
};
export default Result;
