import React from "react";

const ItemDetail = props => (
  <div className={props.itemType.toLowerCase()}>
    <h2>{props.itemType}</h2>
    <ol>
      {props.items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  </div>
);

export default ItemDetail;
