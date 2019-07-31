import { push } from "connected-react-router";
import API from "../utils/API";

export const FETCH_RECIPES_REQUEST = "FETCH_RECIPES_REQUEST";
export const FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS";
export const FETCH_RECIPES_FAILURE = "FETCH_RECIPES_FAILURE";

export const getRecipes = () => dispatch => {
  dispatch({ type: FETCH_RECIPES_REQUEST });

  API.get("/recipes")
    .then(response => {
      dispatch({ type: FETCH_RECIPES_SUCCESS, recipes: response.data.recipes });
    })
    .catch(error =>
      dispatch({
        type: FETCH_RECIPES_FAILURE,
        errorMessage: error.response.data.message
      })
    );
};

export const FETCH_RECIPE_REQUEST = "FETCH_RECIPE_REQUEST";
export const FETCH_RECIPE_SUCCESS = "FETCH_RECIPE_SUCCESS";
export const FETCH_RECIPE_FAILURE = "FETCH_RECIPE_FAILURE";

export const getRecipe = id => dispatch => {
  dispatch({ type: FETCH_RECIPE_REQUEST });

  API.get(`/recipes/${id}`)
    .then(response =>
      dispatch({ type: FETCH_RECIPE_SUCCESS, recipe: response.data.recipe })
    )
    .catch(error => {
      dispatch({
        type: FETCH_RECIPES_FAILURE,
        errorMessage: error.response.data
      });
    });
};

export const CREATE_RECIPE_REQUEST = "CREATE_RECIPE_REQUEST";
export const CREATE_RECIPE_SUCCESS = "CREATE_RECIPE_SUCCESS";
export const CREATE_RECIPE_FAILURE = "CREATE_RECIPE_FAILURE";

export const createRecipe = recipe => dispatch => {
  dispatch({ type: CREATE_RECIPE_REQUEST });

  API.post("/recipes", recipe)
    .then(response => {
      dispatch({ type: CREATE_RECIPE_SUCCESS, recipes: response.data });
      dispatch(push("/recipes"));
    })
    .catch(error => {
      dispatch({
        type: CREATE_RECIPE_FAILURE,
        errorMessage: error.response.data.errorMessage
      });
    });
};
