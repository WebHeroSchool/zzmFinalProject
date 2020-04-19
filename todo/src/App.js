import React from 'react';

const ItemList = () => (<ul style={{color: "olive"}}>
  <li>field1</li>
  <li>field2</li>
</ul>)

const App = () => (<div>
  <h1 style={{
    color: "darkviolet",
    fontSize: 40,
    textAlign: "center"
}}>Hello World!</h1>
  <ItemList />
</div>);
      
export default App;