import React from "react";

export default props => (
  <form onSubmit={props.onSubmit}>
    <input
      type="text"
      name="title"
      placeholder="Title"
      value={props.titleValue}
      required
    />

    <input
      type="text"
      name="source"
      placeholder="Source"
      value={props.sourceValue}
    />

    <input
      type="text"
      name="notes"
      placeholder="Notes"
      value={props.notesValue}
    />

    <input
      type="text"
      name="ingredients"
      placeholder="Ingredients"
      value={props.ingredientValue}
    />

    <input
      type="text"
      name="instructions"
      placeholder="Instructions"
      value={props.instructionValue}
    />

    <input type="submit" value="Add recipe" />
  </form>
);
