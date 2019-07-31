import React from "react";

const Recipe = props => (
  <div className="recipe">
    <h1>{props.recipe.title}</h1>
    <p>{props.recipe.notes}</p>
  </div>
);

export default Recipe;
