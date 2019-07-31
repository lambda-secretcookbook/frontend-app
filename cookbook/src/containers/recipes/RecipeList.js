import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Error from "../../components/Error";

import { getRecipes } from "../../actions";
import RecipeCard from "../../components/recipes/RecipeCard";

class RecipeList extends Component {
  componentDidMount() {
    this.props.getRecipes();
  }

  render() {
    if (this.props.isFetchingRecipes) {
      return <div className="loading">Loading...</div>;
    }

    if (this.props.errorMessage) {
      return <Error errorMessage={this.props.errorMessage} />;
    }

    return (
      <div className="recipes">
        {this.props.recipes.map(recipe => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </Link>
        ))}
        <Link to="/recipes/new">Create new recipe</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes.recipesList,
  isFetchingRecipes: state.recipes.isFetchingRecipes,
  errorMessage: state.recipes.errorMessage
});

export default connect(
  mapStateToProps,
  { getRecipes }
)(RecipeList);
