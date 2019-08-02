import React from "react";

import { Form, Button } from "react-bootstrap";

const ItemForm = props => (
  <Form onSubmit={props.onSubmit}>
    <h2>{props.itemText}</h2>
    <ul className="items">
      {props.items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>

    <Form.Control
      type="text"
      name={props.inputValueName}
      placeholder={props.itemText}
      required
      value={props.inputValue}
      onChange={props.handleInput}
    />

    <Button type="submit">Add</Button>
  </Form>
);

export default ItemForm;
