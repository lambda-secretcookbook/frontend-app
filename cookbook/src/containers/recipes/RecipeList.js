import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Card, Button } from "react-bootstrap";

import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { getRecipes } from "../../actions";

class RecipeList extends Component {
  componentDidMount() {
    this.props.getRecipes();
  }

  render() {
    if (this.props.isFetchingRecipes) {
      return <Loading />;
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
              <Card.Subtitle className="mb-2 text-muted">
                {recipe.source}
              </Card.Subtitle>
              <Card.Text>{recipe.notes}</Card.Text>
              <Card.Link href={`/recipe/${recipe.id}`}>View</Card.Link>
            </Card.Body>
          </Card>
        ))}
        <Button href="/recipes/new">Create New Recipe</Button>
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
