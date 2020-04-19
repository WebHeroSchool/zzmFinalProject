import React from 'react';
import InputItem from '../InputItem/InputItem.js'
import ItemList from '../ItemList/ItemList.js'
import Footer from '../Footer/Footer.js'

const App = () => (<div>
  <h1 style={{fontSize: 100, color: "gold"}}>todos</h1>
  <InputItem />
  <ItemList />
  <Footer />
</div>);
      
export default App;