import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Spinner } from "react-bootstrap";

import Error from "../../components/Error";
import ItemDetail from "../../components/recipes/ItemDetail";
import { getRecipe, deleteRecipe } from "../../actions";

class RecipeDetail extends Component {
  static defaultProps = {};
  componentDidMount() {
    this.props.getRecipe(this.props.id);
  }

  deleteRecipe = event => {
    event.preventDefault();
    this.setState({ confirmDeleteModal: false });
    this.props.deleteRecipe(this.props.id);
  };

  render() {
    if (this.props.isFetchingRecipe) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    }

    if (this.props.errorMessage) {
      return <Error message={this.props.errorMessage} />;
    }

    return (
      <div className="recipe">
        <header className="header">
          <h1>{this.props.recipe.title}</h1>
          <span>
            <strong>Source:</strong> {this.props.recipe.source} &nbsp;
          </span>
          <span>
            <strong>Notes:</strong> {this.props.recipe.notes}
          </span>
        </header>
        <ItemDetail
          itemType="Ingredients"
          items={this.props.recipe.ingredients}
        />
        <ItemDetail
          itemType="Instructions"
          items={this.props.recipe.instructions}
        />
        <Button variant="danger" onClick={this.deleteRecipe}>
          Delete
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    id,
    recipe: state.recipes.currentRecipe,
    isFetchingRecipe: state.recipes.isFetchingRecipe,
    errorMessage: state.recipes.errorMessage
  };
};

export default connect(
  mapStateToProps,
  { getRecipe, deleteRecipe }
)(RecipeDetail);
