import React from 'react';
import Result from '../Result/';
import './ResultList.css';
const ResultList = (props) => {
	const getReceipeId = (url) => {
		props.setReceipeDetail(url);
	};
	return (
		<div className='result_div'>
			{props.showResults.map((receipe) => {
				return <Result key={receipe.id} setReceipeID={getReceipeId} receipeDetails={receipe} />;
			})}
		</div>
	);
};
export default ResultList;
