import React from 'react';
import InputItem from '../InputItem/InputItem.js'
import ItemList from '../ItemList/ItemList.js'
import Footer from '../Footer/Footer.js'

// const todoItem = ["React", "Redux", "Immutable"];

const App = () => {
	const items = [
		{value: "React"},
		{value: "Redux"},
		{value: "Immutable"}
	];

	return (
		<div>
		  <h1 style={{fontSize: 100, color: "gold"}}>todos</h1>
		  <InputItem />
		  <ItemList items={items} />
		  <Footer count={3}/>
		</div>);
}
export default App;