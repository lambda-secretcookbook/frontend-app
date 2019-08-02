import React from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Secret Cookbook</Navbar.Brand>
  </Navbar>
);

export default Navigation;
