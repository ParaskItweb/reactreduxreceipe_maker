import React from 'react';
import './Search.css';
const Search = (props) => {
	let searchQuery = '';

	return (
		<div className='main_div'>
			<div className='img_div'>
				<img src='img/logo.png' className='img_height' alt='logo' />
			</div>
			<div className='search_div'>
				<div className='ui input search_input'>
					<input
						type='text'
						placeholder='Search...'
						onChange={(e) => {
							searchQuery = e.target.value;
						}}
					/>
				</div>
				<button
					type='button'
					className='ui orange button'
					onClick={() => {
						props.onButtonClick(searchQuery);
					}}
				>
					SEARCH
				</button>
			</div>
		</div>
	);
};

export default Search;
