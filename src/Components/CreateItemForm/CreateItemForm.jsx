import React, { useState } from 'react';

export default function CreateItemForm(props) {
  
  const submitItemHandler = e => {
    e.preventDefault();
    props.createItem(name, price);
    setName('');
    setPrice('');
  }

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const inputText = e => setName(e.target.value);

  const inputPrice = e => setPrice(e.target.value);


  return (
    <form>
      <input 
        type='text'
        placeholder='item name'
        name='name'
        value={name}
        onChange={inputText}
      />
      <input 
        type='number'
        placeholder='value'
        name='price'
        value={price}
        onChange={inputPrice}
      />
      <button onClick={submitItemHandler}>Add item</button>
    </form>
  )
}