import { useState } from 'react';
import CompletedList from '../CompletedList/CompletedList';
import CreateItemForm from '../CreateItemForm/CreateItemForm';
import ShoppingList from '../ShoppingList/ShoppingList';
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

  return (
    <main>
      <header className='main-header'>
        <h1 className='main-title'>SHOPPING LIST</h1>
      </header>
      <div className="flex-column">
        <CreateItemForm createItem={createItem} />
        <ShoppingList items={items.filter(item => !item.isCompleted)} toggle={toggleCompleted} />
        <CompletedList items={items.filter(item => item.isCompleted)} />
      </div>
      <div className="footer-container">
      <footer className="footer">Made with 💙 by Natalle</footer>
    </div>
    </main>
  );
}