import React from "react";
import { Form, Button } from "react-bootstrap";

const RecipeForm = props => (
  <Form onSubmit={props.createRecipe}>
    <Form.Control
      type="text"
      name="title"
      placeholder="Title"
      value={props.titleValue}
      required
      onChange={props.handleInput}
    />

    <Form.Control
      type="text"
      name="source"
      placeholder="Source"
      value={props.sourceValue}
      onChange={props.handleInput}
    />

    <Form.Control
      type="text"
      name="notes"
      placeholder="Notes"
      value={props.notesValue}
      onChange={props.handleInput}
    />

    <Button type="submit">Add</Button>
  </Form>
);

export default RecipeForm;
