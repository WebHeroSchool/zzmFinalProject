import React from 'react';
import InputItem from '../InputItem/InputItem.js'
import ItemList from '../ItemList/ItemList.js'
import Footer from '../Footer/Footer.js'

const todoItem = "Write new app";

const App = () => (<div>
  <h1 style={{fontSize: 100, color: "gold"}}>todos</h1>
  <InputItem />
  <ItemList todoItem={todoItem} />
  <Footer count={3}/>
</div>);
      
export default App;