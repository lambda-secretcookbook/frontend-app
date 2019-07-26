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

export const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        message: ""
      };

    case LOGIN_SUCCESS:
      break;

    case LOGIN_FAILURE:
      return {
        message: action.message
      };

    case REGISTER_REQUEST:
      return {
        message: ""
      };

    case REGISTER_SUCCESS:
      break;

    case REGISTER_FAILURE:
      return {
        message: action.message
      };

    default:
      return state;
  }
};
