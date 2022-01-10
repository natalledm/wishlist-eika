import React from 'react';
import './completed-list.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

export default function CompletedList(props) {
  return (
    <section className='bought-list-container flex-column'>
      <h4 className='bought-list-title'>BOUGHT ITEMS</h4>
      <ul>
        {props.items.map((item) => <li className='bought-item' key={item.id}>{item.name} {item.price}:-</li>)}
      </ul>
    </section>
  );
}