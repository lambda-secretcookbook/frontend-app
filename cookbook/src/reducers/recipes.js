import {
  FETCH_RECIPES_REQUEST,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILURE
} from "../actions";

const initialState = {
  recipes: [],
  isFetchingRecipes: false,
  message: ""
};

export const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES_REQUEST:
      return {
        ...state,
        recipes: [],
        isFetchingRecipes: true
      };

    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        recipes: [...state, action.recipes],
        isFetchingRecipes: false
      };

    case FETCH_RECIPES_FAILURE:
      return {
        ...state,
        recipes: [],
        isFetchingRecipes: false,
        message: action.message
      };

    default:
      return state;
  }
};
