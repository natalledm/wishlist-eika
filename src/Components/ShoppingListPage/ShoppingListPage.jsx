import react, { useState } from 'react';
import CreateItemForm from '../CreateItemForm/CreateItemForm';
import ShoppingList from '../ShoppingList/ShoppingList';


export default function ShoppingListPage() {

  const [id, setId] = useState(0)
  
  // setCompleted(id, isCompleted) = muda pra true se clicar o botão. passar como props para shopping list

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
    <>
      <CreateItemForm createItem={createItem}/>
      <ShoppingList items={items} />
    </>
  );
}