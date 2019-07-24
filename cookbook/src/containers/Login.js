import React, { Component } from "react";
import { connect } from "react-redux";

import { authenticateUser } from "../actions";

import UserForm from "../components/UserForm";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  authenticateUser = event => {
    event.preventDefault();

    const { username, password } = this.state;
    this.props.authenticateUser({ username, password });
  };

  render() {
    return (
      <UserForm
        onSubmit={this.authenticateUser}
        handleInputChange={this.handleInputChange}
      />
    );
  }
}

export default connect(
  undefined,
  { authenticateUser }
)(Login);
