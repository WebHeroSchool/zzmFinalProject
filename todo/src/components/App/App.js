import React from 'react';
import InputItem from '../InputItem/InputItem.js'
import ItemList from '../ItemList/ItemList.js'
import Footer from '../Footer/Footer.js'
import "./App.css"
import "../ItemList/ItemList.css"

// const todoItem = ["React", "Redux", "Immutable"];

const App = () => {
	const items = [
		{value: "React"},
		{value: "Redux"},
		{value: "Immutable"}
	];

	return (
		<div className="wrap">
		  <h1 className="wrap_title">todos</h1>
		  <InputItem />
		  <ItemList items={items} />
		  <Footer count={3}/>
		</div>);
}
export default App;