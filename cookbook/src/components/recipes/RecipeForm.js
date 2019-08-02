import React from "react";
import { Alert, Form, Button } from "react-bootstrap";

const RecipeForm = props => (
  <Form onSubmit={props.createRecipe}>
    {props.errorMessage ? (
      <Alert variant="danger">{props.errorMessage}</Alert>
    ) : (
      undefined
    )}

    <Form.Group>
      <Form.Control
        type="text"
        name="title"
        placeholder="Title"
        value={props.titleValue}
        required
        onChange={props.handleInput}
      />
      <Form.Text className="text-muted">The name of your recipe.</Form.Text>
    </Form.Group>

    <Form.Group>
      <Form.Control
        type="text"
        name="source"
        placeholder="Source"
        value={props.sourceValue}
        onChange={props.handleInput}
      />
      <Form.Text className="text-muted">Where the recipe comes from.</Form.Text>
    </Form.Group>

    <Form.Group>
      <Form.Control
        type="text"
        name="notes"
        placeholder="Notes"
        value={props.notesValue}
        onChange={props.handleInput}
      />
      <Form.Text className="text-muted">
        Any extra information about this recipe that need to be noted.
      </Form.Text>
    </Form.Group>

    <Button type="submit" size="lg">
      Add Recipe
    </Button>
  </Form>
);

export default RecipeForm;
