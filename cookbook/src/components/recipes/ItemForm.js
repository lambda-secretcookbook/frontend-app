import React from "react";
import { Form, Button } from "react-bootstrap";

const ItemForm = props => (
  <Form className="mb-3" onSubmit={props.onSubmit}>
    <Form.Group>
      <Form.Control
        type="text"
        name={props.inputValueName}
        value={props.inputValue}
        placeholder={props.itemText}
        onChange={props.handleInput}
        required
      />
      <Form.Text className="text-muted">{props.helpText}</Form.Text>

      <ul className="items mt-3">
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Form.Group>

    <Button type="submit" variant="secondary">
      Add {props.itemText.slice(0, -1)}
    </Button>
  </Form>
);

export default ItemForm;
