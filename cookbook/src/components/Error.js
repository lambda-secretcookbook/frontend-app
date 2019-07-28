import React from "react";

export default ({ type, message }) => (
  <div className="error">
    <h1>{type ? type : "Internal Server Error"}</h1>
    <p>{message}</p>
  </div>
);
