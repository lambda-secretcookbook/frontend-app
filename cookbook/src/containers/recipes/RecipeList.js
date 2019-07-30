import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Error from "../../components/Error";

import { getRecipes } from "../../actions";
import Recipe from "../../components/recipes/Recipe";

class RecipeList extends Component {
  componentDidMount() {
    this.props.getRecipes();
  }

  render() {
    if (this.props.isFetchingRecipes) {
      return <div className="loading">Loading...</div>;
    }

    if (this.props.message) {
      return <Error message={this.props.message} />;
    }

    return (
      <div className="recipes">
        {this.props.recipes.map(recipe => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
            <Recipe recipe={recipe} />
          </Link>
        ))}
        <Link to="/recipes/new">Create new recipe</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes.recipes,
  isFetchingRecipes: state.recipes.isFetchingRecipes,
  message: state.recipes.message
});

export default connect(
  mapStateToProps,
  { getRecipes }
)(RecipeList);
