import * as actions from "../actions";

const initialState = {
  recipesList: [],
  currentRecipe: {
    id: undefined,
    ingredients: [],
    instructions: [],
    notes: "",
    source: "",
    tags: [],
    title: "",
    user_id: undefined
  },
  isFetchingRecipes: false,
  isFetchingRecipe: false,
  errorMessage: ""
};

export const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_RECIPES_REQUEST:
      return {
        ...state,
        recipesList: [],
        isFetchingRecipes: true
      };

    case actions.FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        recipesList: action.recipesList,
        isFetchingRecipes: false
      };

    case actions.FETCH_RECIPES_FAILURE:
      return {
        ...state,
        isFetchingRecipes: false,
        errorMessage: action.errorMessage
      };

    case actions.FETCH_RECIPE_REQUEST:
      return { ...state, isFetchingRecipe: true };

    case actions.FETCH_RECIPE_SUCCESS:
      return {
        ...state,
        isFetchingRecipe: false,
        currentRecipe: action.currentRecipe
      };

    case actions.FETCH_RECIPE_FAILURE:
      return {
        ...state,
        isFetchingRecipe: false,
        errorMessage: action.errorMessage
      };

    case actions.CREATE_RECIPE_REQUEST:
      return { ...state };

    case actions.CREATE_RECIPE_SUCCESS:
      return { ...state };

    case actions.CREATE_RECIPE_FAILURE:
      return { ...state, errorMessage: action.errorMessage };

    case actions.DELETE_RECIPE_REQUEST:
      return { ...state };

    case actions.DELETE_RECIPE_SUCCESS:
      return { ...state };

    case actions.DELETE_RECIPE_FAILURE:
      return { ...state, errorMessage: action.errorMessage };

    default:
      return state;
  }
};
