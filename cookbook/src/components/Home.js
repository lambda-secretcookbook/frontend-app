import React from "react";
import { Route, Redirect } from "react-router-dom";
import { hasToken } from "../utils/token";

const Home = () => {
  if (hasToken) {
    return <Redirect to="/recipes" />;
  } else {
    return <Redirect to="/account/login" />;
  }
};

export default Home;
