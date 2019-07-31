import React, { Component } from "react";
import { connect } from "react-redux";

import RecipeCard from "../../components/recipes/RecipeCard";
import { getRecipe } from "../../actions";

class RecipeDetail extends Component {
  componentDidMount() {
    this.props.getRecipe(this.props.id);
  }

  render() {
    return <RecipeCard recipe={this.props.recipe} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return { id, recipe: state.recipes.currentRecipe };
};

export default connect(
  mapStateToProps,
  { getRecipe }
)(RecipeDetail);
