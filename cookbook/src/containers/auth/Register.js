import React, { Component } from "react";
import { connect } from "react-redux";

import { registerUser } from "../../actions";
import AuthForm from "../../components/auth/AuthForm";

class Register extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  registerUser = event => {
    event.preventDefault();

    const { username, password } = this.state;
    this.props.registerUser({ username, password });
  };

  render() {
    return (
      <AuthForm
        onSubmit={this.registerUser}
        usernameValue={this.state.username}
        passwordValue={this.state.password}
        errorMessage={this.props.errorMessage}
        handleChange={this.handleChange}
        submitText="Register"
      />
    );
  }
}

const mapStateToProps = state => ({
  errorMessage: state.auth.errorMessage
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
