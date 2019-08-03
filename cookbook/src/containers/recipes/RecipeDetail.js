import React, { Component } from "react";
import { connect } from "react-redux";
import { Jumbotron, Button, Modal } from "react-bootstrap";

import Loading from "../../components/Loading";
import Error from "../../components/Error";
import ItemDetail from "../../components/recipes/ItemDetail";

import { getRecipe, deleteRecipe } from "../../actions";

class RecipeDetail extends Component {
  state = {
    showDeleteModal: false
  };

  componentDidMount() {
    this.props.getRecipe(this.props.id);
  }

  toggleDeleteModal = () => {
    this.setState(prevState => ({
      showDeleteModal: !prevState.showDeleteModal
    }));
  };

  deleteRecipe = event => {
    event.preventDefault();
    this.props.deleteRecipe(this.props.id);
  };

  render() {
    if (this.props.isFetchingRecipe) {
      return <Loading />;
    }

    if (this.props.errorMessage) {
      return <Error message={this.props.errorMessage} />;
    }

    return (
      <div className="recipe">
        <Jumbotron className="header">
          <h1>{this.props.recipe.title}</h1>
          <div>
            <strong>Source:</strong> {this.props.recipe.source}
          </div>
          {this.props.recipe.notes ? (
            <div>{this.props.recipe.notes}</div>
          ) : (
            undefined
          )}
        </Jumbotron>

        <ItemDetail
          className="mt-3"
          itemType="Ingredients"
          items={this.props.recipe.ingredients}
        />

        <ItemDetail
          itemType="Instructions"
          items={this.props.recipe.instructions}
        />

        <div className="options">
          <Button variant="danger" onClick={this.toggleDeleteModal}>
            Delete
          </Button>
        </div>

        <Modal
          show={this.state.showDeleteModal}
          onHide={this.toggleDeleteModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete recipe</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>
              Are you sure you want to delete this recipe? It will be forever
              lost.
            </p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.toggleDeleteModal}>
              Nevermind
            </Button>
            <Button variant="danger" onClick={this.deleteRecipe}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
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
