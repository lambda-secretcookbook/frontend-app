import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { authenticateUser } from "../../actions";
import UserForm from "../../components/auth/AuthForm";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

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
      <>
        <UserForm
          onSubmit={this.authenticateUser}
          usernameValue={this.state.username}
          passwordValue={this.state.password}
          message={this.props.message}
          handleChange={this.handleChange}
          submitText="Log in"
        />

        <div className="register">
          Don't have an account? <Link to="/account/register">Create</Link> one
          now!
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  message: state.auth.message
});

export default connect(
  mapStateToProps,
  { authenticateUser }
)(Login);
