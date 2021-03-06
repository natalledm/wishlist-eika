import { useEffect, useState } from 'react';
import CompletedList from '../../CompletedList/CompletedList';
import CreateItemForm from '../../CreateItemForm/CreateItemForm';
import ShoppingList from '../../ShoppingList/ShoppingList';
import './shopping-list-page.css';


export default function ShoppingListPage() {

  const initialItemsString = localStorage.getItem("items");

  const initialItems = initialItemsString === null ? [] : JSON.parse(initialItemsString);

  const [items, setItems] = useState(initialItems);

  const highestId = (items) => {
    let maxId = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].id > maxId) {
        maxId = items[i].id;
      }
    }
    return maxId;
  }

  const [id, setId] = useState(highestId(initialItems) + 1);


  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items]);

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

  const removeFromList = (itemToRemove) => {
    const newArr = items.filter((item) => {
      if (item.id === itemToRemove.id) {
        return false;
      } else {
        return true;
      }
    })
    setItems(newArr);
  }

  return (
    <div className="flex-column list-container">
      <CreateItemForm createItem={createItem} />
      <ShoppingList items={items.filter(item => !item.isCompleted)} toggle={toggleCompleted} visibility={changeVisibility} remove={removeFromList} />
      {isVisible ? <CompletedList items={items.filter(item => item.isCompleted)} toggle={toggleCompleted} remove={removeFromList} /> : null}
    </div>
  );
}