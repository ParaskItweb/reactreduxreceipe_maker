import React from 'react';
import './FinalDetails.css';
const FinalDetails = (props) => {
	return (
		<div>
			<p className='ingre'>{props.getIngredients.name}</p>
			<img
				className='ingre_img'
				src={` https://spoonacular.com/cdn/ingredients_100x100/${props.getIngredients.image}`}
				alt='Ingredient'
			/>
		</div>
	);
};
export default FinalDetails;
