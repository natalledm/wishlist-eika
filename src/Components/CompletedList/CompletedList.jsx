import React from 'react';
import './completed-list.css';

export default function CompletedList(props) {
  return (
    <section className='bought-list-container flex-column'>
      <div className='bought-list-toggle-container'>
        <a className='bought-list-toggle' href='#'>BOUGHT ITEMS</a>
      </div>
      <ul>
        {props.items.map((item) => <li className='bought-item' key={item.id}>{item.name} {item.price}:-</li>)}
      </ul>
    </section>
  );
}