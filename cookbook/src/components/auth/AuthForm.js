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
      <Form.Label htmlFor="username">Username</Form.Label>
      <Form.Control
        type="text"
        name="username"
        value={props.usernameValue}
        onChange={props.handleChange}
        required
      />
    </Form.Group>

    <Form.Group>
      <Form.Label htmlFor="password">Password</Form.Label>
      <Form.Control
        type="password"
        name="password"
        value={props.passwordValue}
        onChange={props.handleChange}
        required
      />
    </Form.Group>

    <Button variant="primary" type="submit">
      {props.submitText}
    </Button>
  </Form>
);

export default AuthForm;
