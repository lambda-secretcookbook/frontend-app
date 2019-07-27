import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from "../actions";

const initalState = {
  message: ""
};

export const authReducer = (state = initalState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        message: ""
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        message: ""
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        message: action.message
      };

    case REGISTER_REQUEST:
      return {
        ...state,
        message: ""
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        message: ""
      };

    case REGISTER_FAILURE:
      return {
        ...state,
        message: action.message
      };

    default:
      return state;
  }
};
