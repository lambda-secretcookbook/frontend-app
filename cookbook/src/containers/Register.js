import React, { Component } from "react";
import { connect } from "react-redux";

import UserForm from "../components/UserForm";

class Register extends Component {
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

  registerUser = event => {
    event.preventDefault();
    // TODO
  };

  render() {
    return (
      <UserForm
        onSubmit={this.registerUser}
        usernameValue={this.state.username}
        passwordValue={this.state.password}
        message={this.props.message}
        handleChange={this.handleChange}
        submitText="Register"
      />
    );
  }
}

const mapStateToProps = state => ({
  message: state.user.message
});

export default connect(
  mapStateToProps,
  {}
)(Register);
