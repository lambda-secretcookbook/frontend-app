import {
  FETCH_RECIPES_REQUEST,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILURE,
  FETCH_RECIPE_REQUEST,
  FETCH_RECIPE_SUCCESS,
  FETCH_RECIPE_FAILURE
} from "../actions";

const initialState = {
  recipesList: [],
  currentRecipe: [],
  isFetchingRecipes: false,
  isFetchingRecipe: false,
  errorMessage: ""
};

export const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES_REQUEST:
      return {
        ...state,
        recipesList: [],
        isFetchingRecipes: true
      };

    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        recipesList: action.recipesList,
        isFetchingRecipes: false
      };

    case FETCH_RECIPES_FAILURE:
      return {
        ...state,
        isFetchingRecipes: false,
        errorMessage: action.errorMessage
      };

    case FETCH_RECIPE_REQUEST:
      return {
        ...state,
        isFetchingRecipe: true
      };

    case FETCH_RECIPE_SUCCESS:
      return {
        ...state,
        isFetchingRecipe: false,
        currentRecipe: action.currentRecipe
      };

    case FETCH_RECIPE_FAILURE:
      return {
        ...state,
        isFetchingRecipe: false,
        errorMessage: action.errorMessage
      };

    default:
      return state;
  }
};
