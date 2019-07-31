import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from "../actions";

const initalState = {
  errorMessage: ""
};

export const authReducer = (state = initalState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state
      };

    case LOGIN_SUCCESS:
      return {
        ...state
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        errorMessage: action.errorMessage
      };

    case REGISTER_REQUEST:
      return {
        ...state
      };

    case REGISTER_SUCCESS:
      return {
        ...state
      };

    case REGISTER_FAILURE:
      return {
        ...state,
        errorMessage: action.errorMessage
      };

    default:
      return state;
  }
};
