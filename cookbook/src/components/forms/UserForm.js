import React from "react";

export default props => (
  <form onSubmit={props.onSubmit}>
    <div className="message">{props.message}</div>
    <input
      type="text"
      name="username"
      value={props.usernameValue}
      placeholder="Username"
      onChange={props.handleChange}
      required
    />

    <input
      type="password"
      name="password"
      value={props.passwordValue}
      placeholder="Password"
      onChange={props.handleChange}
      required
    />

    <input type="submit" value={props.submitText} />
  </form>
);
