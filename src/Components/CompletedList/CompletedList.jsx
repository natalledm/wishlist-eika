import React from 'react';
import './completed-list.css';

export default function CompletedList(props) {
  return (
    <section className='bought-list-container flex-column'>
      <h4 className='bought-list-title'>BOUGHT ITEMS</h4>
      <ul className='bought-list'>
        {props.items.map((item) => <li className='bought-item' key={item.id}>
          <span>
            <input type="checkbox" value={props.checked} defaultChecked={item.isCompleted} onChange={() => props.toggle(item)} />
          </span>
          <span className='bought-item-name'>
          {item.name}
          </span>
          <span>
          {item.price}:-
          </span>
        </li>)}
      </ul>
    </section>
  );
}