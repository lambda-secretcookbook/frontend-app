import React from "react";

const ItemDetail = props => (
  <div className={props.itemType.toLowerCase()}>
    <h2>{props.itemType}</h2>
    {props.items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </div>
);

export default ItemDetail;
