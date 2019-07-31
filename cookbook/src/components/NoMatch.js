import React from "react";
import Error from "./Error";

export const NoMatch = () => (
  <Error
    type="Page not found"
    errorMessage="The page you were looking for was unable to be found"
  />
);

export default NoMatch;
