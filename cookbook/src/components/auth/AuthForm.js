import React from "react";

import { Alert, Form, Button } from "react-bootstrap";

const AuthForm = props => (
  <Form onSubmit={props.onSubmit}>
    {props.errorMessage ? (
      <Alert variant="danger">{props.errorMessage}</Alert>
    ) : (
      undefined
    )}

    <Form.Label for="username">Username</Form.Label>
    <Form.Input
      type="text"
      name="username"
      value={props.usernameValue}
      onChange={props.handleChange}
      required
    />

    <Form.Label for="password">Password</Form.Label>
    <Form.Input
      type="password"
      name="password"
      value={props.passwordValue}
      placeholder="Password"
      onChange={props.handleChange}
      required
    />

    <Button variant="primary" type="submit">
      {props.submitText}
    </Button>
  </Form>
);

export default AuthForm;
