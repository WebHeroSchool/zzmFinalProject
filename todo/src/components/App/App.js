import React from 'react';
import InputItem from '../InputItem/InputItem.js'
import ItemList from '../ItemList/ItemList.js'
import Footer from '../Footer/Footer.js'
import styles from './App.module.css'


const App = () => {
	const items = [
		{
			value: "React",
			isDone: true
		},
		{
			value: "Redux",
			isDone: false
		},
		{
			value: "Immutable",
			isDone: true
		}
	];

	return (
		<div className={styles.wrap}>
		  <h1 className={styles.title}>todos</h1>
		  <InputItem />
		  <ItemList items={items} />
		  <Footer count={3}/>
		</div>);
}
export default App;