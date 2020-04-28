import React from 'react';
import Item from '../Item/Item.js';

const ItemList = ({items}) => (<ul className="wrap_list">
	{items.map(item => <li key={item.value}><Item value={item.value} /></li>)}
</ul>);

export default ItemList;