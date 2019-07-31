import React, { Component } from "react";
import { connect } from "react-redux";

import { createRecipe } from "../../actions";

import RecipeForm from "../../components/recipes/RecipeForm";
import ItemForm from "../../components/recipes/ItemForm";

class RecipeCreate extends Component {
  state = {
    title: "",
    source: "",
    notes: "",
    ingredients: [],
    instructions: [],
    tags: [],
    ingredientValue: "",
    instructionValue: "",
    tagValue: ""
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addIngredient = event => {
    event.preventDefault();
    this.setState({
      ingredients: [...this.state.ingredients, this.state.ingredientValue],
      ingredientValue: ""
    });
  };

  addInstruction = event => {
    event.preventDefault();
    this.setState({
      instructions: [...this.state.instructions, this.state.instructionValue],
      instructionValue: ""
    });
  };

  addTag = event => {
    event.preventDefault();
    this.setState({
      tags: [...this.state.tags, this.state.tagValue],
      tagValue: ""
    });
  };

  createRecipe = event => {
    event.preventDefault();

    this.props.createRecipe({
      title: this.state.title,
      source: this.state.source,
      notes: this.state.notes,
      ingredients: this.state.ingredients,
      instructions: this.state.instructions,
      tags: this.state.tags
    });
  };

  render() {
    return (
      <div className="recipe create">
        <RecipeForm
          createRecipe={this.createRecipe}
          titleValue={this.state.title}
          sourceValue={this.state.source}
          notesValue={this.state.notes}
          handleInput={this.handleInput}
        />

        <ItemForm
          itemText="Ingredients"
          onSubmit={this.addIngredient}
          items={this.state.ingredients}
          inputValue={this.state.ingredientValue}
          inputValueName="ingredientValue"
          handleInput={this.handleInput}
        />

        <ItemForm
          itemText="Instructions"
          onSubmit={this.addInstruction}
          items={this.state.instructions}
          inputValue={this.state.instructionValue}
          inputValueName="instructionValue"
          handleInput={this.handleInput}
        />

        <ItemForm
          itemText="Tags"
          onSubmit={this.addTag}
          items={this.state.tags}
          inputValue={this.state.tagValue}
          inputValueName="tagValue"
          handleInput={this.handleInput}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { createRecipe }
)(RecipeCreate);