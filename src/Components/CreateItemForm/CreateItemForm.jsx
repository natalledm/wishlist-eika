import React, { useState } from 'react';
import './create-item-form.css';

export default function CreateItemForm(props) {

  const submitItemHandler = e => {
    e.preventDefault();
    if (name.length === 0 || price === '') {
      console.log("enter valid name and number")
    } else {
      props.createItem(name, price);
    }
    setName('');
    setPrice('');
  }

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const inputText = e => setName(e.target.value);

  const inputPrice = e => setPrice(e.target.value);


  return (
    <form className='create-item-form flex-column'>
      <div>
        <input
          type='text'
          placeholder='item name'
          name='name'
          value={name}
          onChange={inputText}
        />
        <input
          type='number'
          placeholder='price'
          name='price'
          value={price}
          onChange={inputPrice}
        />
      </div>
      <div className='item-form-button-container'>
        <button className='item-form-button' onClick={submitItemHandler}>Add item</button>
      </div>
    </form>
  )
}