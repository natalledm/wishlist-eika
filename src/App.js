import { useState } from 'react';
import './App.css';
import CreateItemForm from './Components/CreateItemForm/CreateItemForm';
import ShoppingList from './Components/ShoppingList/ShoppingList';


function App() {

  const [id, setId] = useState(0)

  const createItem = (name, price) => {
    const item = {
      name: name,
      price: price,
      isCompleted: false,
      id: id,
    };
    setId(id+1);
    setItems([...items, item]);
  };

  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <CreateItemForm createItem={createItem}/>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
