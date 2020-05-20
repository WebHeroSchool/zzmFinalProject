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
				isDone: false,
				id: 1
			},
			{
				value: "Redux",
				isDone: false,
				id: 2
			},
			{
				value: "Immutable",
				isDone: false,
				id: 3
			}
		],
		count: 6
	};

	onClickDone = id => {
		const newItemList = this.state.items.map(item => {
			const newItem = { ...item };

			if (item.id === id) {
				newItem.isDone = !item.isDone;
			}

			return newItem;
		});

		this.setState({ items: newItemList });
	};

	render() {
		return (
			<div className={styles.wrap}>
			  <h1 className={styles.title}>todos</h1>
			  <InputItem />
			  <ItemList items={this.state.items} onClickDone={this.onClickDone} />
			  <Footer count={this.state.count} />
			</div>);
	}
};


export default App;