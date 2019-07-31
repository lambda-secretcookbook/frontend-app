import React from "react";

const Error = ({ type, message }) => (
  <div className="error">
    <h1>{type ? type : "Internal Server Error"}</h1>
    <p>{message}</p>
  </div>
);

export default Error;
