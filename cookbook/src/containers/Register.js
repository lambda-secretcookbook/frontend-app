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
  {}
)(Register);
