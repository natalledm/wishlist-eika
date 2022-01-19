import React from 'react';
import './shopping-list.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function ShoppingList(props) {
  return (
    <>
      <section className='shop-list-container'>
        <header>
          <h2 className='shop-list-title'>ITEMS</h2>
        </header>
        <ul className='flex-column shop-list'>

          {props.items.map((item) =>
            <li className='shop-list-item' key={item.id}>
              <span>
                <input type="checkbox" value={props.checked} defaultChecked={item.isCompleted} onChange={() => props.toggle(item)} />
                <span className='shop-list-item-name'>{item.name}</span><span className='shop-list-item-price'>{item.price}:-</span>
              </span>
              <span className='delete-item-button-container'>
                <button onClick={() => props.remove(item)} className='delete-item-button'><FontAwesomeIcon icon={faTrash} /></button>
              </span>
            </li>)}
        </ul>
      </section>
      <div className='bought-items-button-container'>
        <button onClick={props.visibility} className='bought-items-button'>
          SEE BOUGHT ITEMS
        </button>
      </div>
    </>
  );
}