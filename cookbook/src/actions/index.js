import axios from "axios";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const authenticateUser = ({ username, password }) => dispatch => {
  dispatch({ type: "LOGIN_REQUEST" });

  axios
    .post("https://lambdaschool-cookbook2.herokuapp.com/auth/login", {
      username,
      password
    })
    .then(response => {
      dispatch({ type: "LOGIN_SUCCESS" });
      localStorage.setItem("token", response.data.token);
    })
    .catch(error =>
      dispatch({ type: "LOGIN_FAILURE", message: error.response.data.message })
    );
};

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const registerUser = ({ username, password }) => dispatch => {
  dispatch({ type: "REGISTER_REQUEST" });

  axios
    .post("http://lambdaschool-cookbook2.herokuapp.com/auth/register", {
      username,
      password
    })
    .then(response => dispatch({ type: "REGISTER_SUCCESS" }))
    .catch(error => dispatch({ type: "REGISTER_FAILURE" }));
};
