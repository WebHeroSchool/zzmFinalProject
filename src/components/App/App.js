import React from 'react';
import InputItem from '../InputItem/InputItem.js'
import ItemList from '../ItemList/ItemList.js'
import Footer from '../Footer/Footer.js'
import styles from './App.module.css'

class App extends React.Component {
	state = {
		items: [
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
		]
	};

	onClickDone = isDone => console.log(isDone);

	render() {
		return (
			<div className={styles.wrap}>
			  <h1 className={styles.title}>todos</h1>
			  <InputItem />
			  <ItemList items={this.state.items} onClickDone={this.onClickDone} />
			  <Footer count={3}/>
			</div>);
	}
};


export default App;