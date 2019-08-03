import React from "react";

import { Alert, Form, Button } from "react-bootstrap";

const AuthForm = props => (
  <Form onSubmit={props.onSubmit}>
    {props.errorMessage ? (
      <Alert variant="danger">{props.errorMessage}</Alert>
    ) : (
      undefined
    )}

    <Form.Group>
      <Form.Control
        type="text"
        name="username"
        placeholder="Username"
        value={props.usernameValue}
        onChange={props.handleChange}
        autoComplete="on"
        required
      />
    </Form.Group>

    <Form.Group>
      <Form.Control
        type="password"
        name="password"
        placeholder="Password"
        value={props.passwordValue}
        onChange={props.handleChange}
        autoComplete="on"
        required
      />
    </Form.Group>

    <Button variant="primary" type="submit">
      {props.submitText}
    </Button>
  </Form>
);

export default AuthForm;
