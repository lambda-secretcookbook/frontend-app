import React from "react";
import { Button, Form, Label, Input } from "reactstrap";

const RecipeForm = props => (
  <Form onSubmit={props.createRecipe}>
    <Input
      type="text"
      name="title"
      placeholder="Title"
      value={props.titleValue}
      required
      onChange={props.handleInput}
    />

    <Input
      type="text"
      name="source"
      placeholder="Source"
      value={props.sourceValue}
      onChange={props.handleInput}
    />

    <Input
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
