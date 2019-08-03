import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
import { CardDeck, Card, Button } from "react-bootstrap";

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
        <CardDeck>
          {this.props.recipes.map(recipe => (
            <Card key={recipe.id} style={{ width: "240px" }}>
              <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {recipe.source}
                </Card.Subtitle>
                <Card.Text>{recipe.notes}</Card.Text>
                <LinkContainer to={`/recipe/${recipe.id}`}>
                  <Button variant="dark" size="sm">
                    View Recipe
                  </Button>
                </LinkContainer>
              </Card.Body>
            </Card>
          ))}
        </CardDeck>
        <LinkContainer to="/recipes/new">
          <Button className="mt-3" size="lg">
            Create New Recipe
          </Button>
        </LinkContainer>
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
