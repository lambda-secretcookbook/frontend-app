import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Card, Spinner, Button } from "react-bootstrap";

import Error from "../../components/Error";
import { getRecipes } from "../../actions";

class RecipeList extends Component {
  componentDidMount() {
    this.props.getRecipes();
  }

  render() {
    if (this.props.isFetchingRecipes) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    }

    if (this.props.errorMessage) {
      return <Error errorMessage={this.props.errorMessage} />;
    }

    return (
      <div className="recipes">
        {this.props.recipes.map(recipe => (
          <Card>
            <Card.Body>
              <Card.Title>{recipe.title}</Card.Title>
              <Card.Text>{recipe.notes}</Card.Text>
              <Card.Link href={`/recipe/${recipe.id}`}>View</Card.Link>
            </Card.Body>
          </Card>
        ))}
        <Link to="/recipes/new">Create New Recipe</Link>
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
