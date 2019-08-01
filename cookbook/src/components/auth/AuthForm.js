import React from "react";
import { Alert, Button, Form, Label, Input } from "reactstrap";

const AuthForm = props => (
  <Form onSubmit={props.onSubmit}>
    <Alert color="danger">{props.errorMessage}</Alert>

    <Label for="username">Username</Label>
    <Input
      type="text"
      name="username"
      value={props.usernameValue}
      onChange={props.handleChange}
      required
    />

    <Label for="password">Password</Label>
    <Input
      type="password"
      name="password"
      value={props.passwordValue}
      placeholder="Password"
      onChange={props.handleChange}
      required
    />

    <Button type="submit">{props.submitText}</Button>
  </Form>
);

export default AuthForm;
