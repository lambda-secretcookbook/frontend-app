import React from "react";

const RecipeForm = props => (
  <form onSubmit={props.createRecipe}>
    <input
      type="text"
      name="title"
      placeholder="Title"
      value={props.titleValue}
      required
      onChange={props.handleInput}
    />

    <input
      type="text"
      name="source"
      placeholder="Source"
      value={props.sourceValue}
      onChange={props.handleInput}
    />

    <input
      type="text"
      name="notes"
      placeholder="Notes"
      value={props.notesValue}
      onChange={props.handleInput}
    />

    <input type="submit" value="Add recipe" />
  </form>
);

export default RecipeForm;
