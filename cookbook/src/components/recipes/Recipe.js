import React from "react";

const Recipe = props => (
  <div className="recipe">
    <header className="information">
      <h1>{props.recipe.title}</h1>
      <p>{props.recipe.notes}</p>
    </header>
    <section className="instructions">
      <ul>
        {props.recipe.instructions.map(instruction => (
          <li>{instruction}</li>
        ))}
        {props.recipe.instructions}
      </ul>
    </section>
  </div>
);

export default Recipe;
