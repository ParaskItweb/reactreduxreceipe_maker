import React from 'react';
import Axios from 'axios';
import Search from './Search';
import ResultList from './ResultList';
import ReceipeDetail from './ReceipeDetail';
import Cart from './Cart';
import WishList from './WishList';

class App extends React.Component {
	state = {
		receipeResult : [],
		receipeData   : [],
		basicData     : {},
		cartData      : [],
		wishListData  : [{}]
	};
	onSearch = async (query) => {
		let results = await Axios(
			`https://api.spoonacular.com/recipes/search?query=${query}&apiKey=a4515eb2f51e495583702255d3840420`
		);
		this.setState({ receipeResult: results.data.results });
	};
	//Cart
	addToList = (listData) => {
		this.setState({
			cartData : [
				...this.state.cartData,
				...listData
			]
		});
	};
	//Wishlist
	addToWishList = (data) => {
		this.setState({
			wishListData : [...this.state.wishListData,data]
		});
	};
	setReceipeDetailtest = async (id) => {
		let receipeIng = await Axios(
			`https://api.spoonacular.com/recipes/${id.id}/ingredientWidget.json?apiKey=a4515eb2f51e495583702255d3840420`
		);
		this.setState({
			receipeData : receipeIng.data.ingredients,
			basicData   : {
				id             : id.id,
				readyInMinutes : id.readyInMinutes,
				servings       : id.servings,
				title          : id.title
			}
		});
	};
	removeItem=(name)=>{
		//console.log(name);
		let tempArray =[];
	    tempArray = this.state.cartData.filter((item)=>{
			return item.name!==name;
		})
		this.setState({cartData:tempArray});
	}
	render () {
		const { receipeResult, receipeData, basicData, cartData, wishListData } = this.state;
		return (
			<div>
				<Search onButtonClick={this.onSearch} />
				<WishList wishListData={wishListData} />
				<div>
					{receipeResult && (
						<ResultList showResults={receipeResult} setReceipeDetail={this.setReceipeDetailtest} />
					)}
					<ReceipeDetail
						showReceipeDetail={receipeData}
						basicDetail={{ basicData }}
						addToList={this.addToList}
						addToWishList={this.addToWishList}
					/>
				</div>
				<Cart addToCart={cartData} getCartIndex={this.removeItem} />
			</div>
		);
	}
}
export default App;
