import React from "react";

const Error = ({ type, errorMessage }) => (
  <div className="error">
    <h1>{type ? type : "Internal Server Error"}</h1>
    <p>{errorMessage}</p>
  </div>
);

export default Error;
