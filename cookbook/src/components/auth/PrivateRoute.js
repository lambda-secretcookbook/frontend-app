import React from "react";
import { Route, Redirect } from "react-router-dom";

const hasToken = localStorage.hasOwnProperty("token");

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      hasToken === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/account/login" />
      )
    }
  />
);

export default PrivateRoute;
