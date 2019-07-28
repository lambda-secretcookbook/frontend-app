import { push } from "connected-react-router";
import API from "../utils/API";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const authenticateUser = ({ username, password }) => dispatch => {
  dispatch({ type: LOGIN_REQUEST });

  API.post("/auth/login", {
    username,
    password
  })
    .then(response => {
      localStorage.setItem("token", response.data.token);

      dispatch({ type: LOGIN_SUCCESS });
      dispatch(push("/recipes"));
    })
    .catch(error =>
      dispatch({ type: LOGIN_FAILURE, message: error.response.data.message })
    );
};

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const registerUser = ({ username, password }) => dispatch => {
  dispatch({ type: REGISTER_REQUEST });

  API.post("/auth/register", {
    username,
    password
  })
    .then(response => {
      localStorage.setItem("token", response.data.token);

      dispatch({ type: LOGIN_SUCCESS });
      dispatch(push("/recipes"));
    })
    .catch(error =>
      dispatch({
        type: REGISTER_FAILURE,
        message: error.response.data.message
      })
    );
};
