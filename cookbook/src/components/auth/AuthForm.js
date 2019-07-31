import React from "react";

const AuthForm = props => (
  <form onSubmit={props.onSubmit}>
    <div className="message error">{props.errorMessage}</div>

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

export default AuthForm;
