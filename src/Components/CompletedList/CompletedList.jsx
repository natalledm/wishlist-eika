import React from 'react';

export default function CompletedList(props) {
  return (
    <ul>
      {props.items.map((item) => <li key={item.id}>{item.name} {item.price}:-</li>)}
    </ul>
  );
}