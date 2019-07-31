import React from "react";

const ItemForm = props => (
  <form onSubmit={props.onSubmit}>
    <h2>{props.itemText}</h2>
    <ul className="items">
      {props.items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>

    <input
      type="text"
      name={props.inputValueName}
      placeholder={props.itemText}
      required
      value={props.inputValue}
      onChange={props.handleInput}
    />

    <input type="submit" value="Add" />
  </form>
);

export default ItemForm;
