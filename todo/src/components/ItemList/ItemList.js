import React from 'react';
import Item from '../Item/Item.js';

const ItemList = ({todoItem}) => (<ul style={{color: "olive"}}>
  <li><Item todoItem={todoItem[0]} /></li>
  <li><Item todoItem={todoItem[1]} /></li>
  <li><Item todoItem={todoItem[2]} /></li>
</ul>);

export default ItemList;