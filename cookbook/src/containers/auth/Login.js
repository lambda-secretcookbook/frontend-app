import React, { Component } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { authenticateUser } from "../../actions";
import AuthForm from "../../components/auth/AuthForm";

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
        <AuthForm
          onSubmit={this.authenticateUser}
          usernameValue={this.state.username}
          passwordValue={this.state.password}
          errorMessage={this.props.errorMessage}
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
  errorMessage: state.auth.errorMessage
});

export default connect(
  mapStateToProps,
  { authenticateUser }
)(Login);
