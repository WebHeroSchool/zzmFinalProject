import React from 'react';
import Item from '../Item/Item.js';

const ItemList = ({todoItem}) => (<ul style={{color: "olive"}}>
  <li><Item todoItem={"React"} /></li>
  <li><Item todoItem={"Redux"} /></li>
  <li><Item todoItem={"Immutable"} /></li>
</ul>);

export default ItemList;