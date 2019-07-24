import axios from "axios";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const authenticateUser = credentials => dispatch => {
  dispatch({ type: "LOGIN_REQUEST" });

  axios
    .post("http://lambdaschool-cookbook2.herokuapp.com/auth/login", credentials)
    .then(response => {
      dispatch({ type: "LOGIN_SUCCESS" });
      localStorage.setItem("token", response.data.token);
    })
    .catch(error => console.log("Error!"));
};
