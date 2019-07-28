import React, { Component } from "react";
import RecipeForm from "../../components/recipes/RecipeForm";

class RecipeCreate extends Component {
  state = {
    title: "",
    source: "",
    notes: "",
    ingredients: [],
    instructions: [],
    ingredientValue: "",
    directionValue: "",
    tagValue: ""
  };

  render() {
    return (
      <RecipeForm
        titleValue={this.state.title}
        sourceValue={this.state.source}
        notesValue={this.state.notes}
        ingredientValue={this.state.ingredientValue}
        directionValue={this.state.directionValue}
      />
    );
  }
}

export default RecipeCreate;
