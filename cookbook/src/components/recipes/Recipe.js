import React from "react";

export default props => (
  <div className="recipe">
    <h1>{props.recipe.name}</h1>
    <p>{props.recipe.notes}</p>
  </div>
);
