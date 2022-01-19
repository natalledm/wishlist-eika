import React from 'react';
import './completed-list.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function CompletedList(props) {
  return (
    <section className='bought-list-container flex-column'>
      <h4 className='bought-list-title'>BOUGHT ITEMS</h4>
      <ul className='bought-list'>
        {props.items.map((item) => <li className='bought-item' key={item.id}>
          <span className='bought-item-properties'>
            <input type="checkbox" value={props.checked} defaultChecked={item.isCompleted} onChange={() => props.toggle(item)} />
            <span className='bought-item-name'>{item.name}</span><span>{item.price}:-</span>
          </span>
          <span className='delete-item-container-completed'>
            <button onClick={() => props.remove(item)} className='delete-item-button'><FontAwesomeIcon icon={faTrash} /></button>
          </span>
        </li>)}
      </ul>
    </section>
  );
}