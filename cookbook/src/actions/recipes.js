import API from "../utils/API";

export const FETCH_RECIPES_REQUEST = "FETCH_RECIPES_REQUEST";
export const FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS";
export const FETCH_RECIPES_FAILURE = "FETCH_RECIPES_FAILURE";

export const getRecipes = () => dispatch => {
  dispatch({ type: FETCH_RECIPES_REQUEST });

  API.get("/recipes")
    .then(response => {
      const payload = response.data;
      dispatch({ type: FETCH_RECIPES_SUCCESS }, payload);
    })
    .catch(error =>
      dispatch({
        type: FETCH_RECIPES_FAILURE,
        message: error.response.data.message
      })
    );
};

export const FETCH_RECIPE_REQUEST = "FETCH_RECIPE_REQUEST";
export const FETCH_RECIPE_SUCCESS = "FETCH_RECIPE_SUCCESS";
export const FETCH_RECIPE_FAILURE = "FETCH_RECIPE_FAILURE";
