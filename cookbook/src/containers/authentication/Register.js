import React, { Component } from "react";
import { connect } from "react-redux";

import { registerUser } from "../../actions";
import UserForm from "../../components/forms/UserForm";

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
  { registerUser }
)(Register);
