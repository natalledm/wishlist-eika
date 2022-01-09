import React from 'react';
import './shopping-list.css';

export default function ShoppingList(props) {
  return (
    <section className='shop-list-container'>
      <header>
        <h2 className='shop-list-title'>ITEMS</h2>
      </header>
      <ul className='flex-column shop-list'>

        {props.items.map((item) =>
          <li className='shop-list-item' key={item.id}> 
            <span>
              <input type="checkbox" value={props.checked} onChange={() => props.toggle(item)} /> 
            </span>
            <span className='shop-list-item-name'>{item.name}</span><span className='shop-list-item-price'>{item.price}:-</span>
          </li>)}
      </ul>
    </section>
  );
}