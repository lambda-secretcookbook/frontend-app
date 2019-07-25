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

  handleChange = event => {
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
        usernameValue={this.state.username}
        passwordValue={this.state.password}
        message={this.props.message}
        handleChange={this.handleChange}
        submitText="Log in"
      />
    );
  }
}

const mapStateToProps = state => ({
  message: state.user.message
});

export default connect(
  mapStateToProps,
  { authenticateUser }
)(Login);
