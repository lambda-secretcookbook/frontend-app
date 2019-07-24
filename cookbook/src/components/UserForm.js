import React from "react";

export default ({ onSubmit, onChange }) => (
  <form onSubmit={onSubmit}>
    <input
      type="text"
      name="username"
      placeholder="Username"
      onChange={onChange}
      required
    />

    <input
      type="password"
      name="password"
      placeholder="Password"
      onChange={onChange}
      required
    />

    <input type="submit" value="Log in" />
  </form>
);
