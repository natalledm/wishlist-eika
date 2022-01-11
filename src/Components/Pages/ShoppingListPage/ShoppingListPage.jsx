import { useState } from 'react';
import CompletedList from '../../CompletedList/CompletedList';
import CreateItemForm from '../../CreateItemForm/CreateItemForm';
import ShoppingList from '../../ShoppingList/ShoppingList';
import './shopping-list-page.css';


export default function ShoppingListPage() {

  const [id, setId] = useState(0);

  const createItem = (name, price) => {
    const item = {
      name: name,
      price: price,
      isCompleted: false,
      id: id,
    };
    setId(id + 1);
    setItems([...items, item]);
  };

  const [items, setItems] = useState([]);

  const toggleCompleted = (itemToToggle) => {
    const newItems = items.map(item => {
      if (item.id !== itemToToggle.id) {
        return item;
      }

      return {
        id: item.id,
        name: item.name,
        price: item.price,
        isCompleted: !item.isCompleted,
      };
    });

    setItems(newItems);
  }

  const [isVisible, setVisibility] = useState(false);

  const changeVisibility = () => {
    if (isVisible) {
      setVisibility(false);
    } else {
      setVisibility(true);
    }
  };


  return (
    <div className="flex-column list-container">
      <CreateItemForm createItem={createItem} />
      <ShoppingList items={items.filter(item => !item.isCompleted)} toggle={toggleCompleted} visibility={changeVisibility} />
      {isVisible ? <CompletedList items={items.filter(item => item.isCompleted)} /> : null}
    </div>
  );
}