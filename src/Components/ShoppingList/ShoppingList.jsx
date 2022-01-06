import React from 'react';

export default function ShoppingList(props) {
  return (
    <ul style={{ listStyle: "none" }}>

      {props.items.map((item) => <li key={item.id}> <input type="checkbox" value={props.checked} onChange={() => props.toggle(item)} /> {item.name} {item.price}:-</li>)}
    </ul>
  );
}