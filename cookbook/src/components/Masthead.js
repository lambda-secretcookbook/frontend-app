import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">Secret Cookbook</NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink to="/">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/recipes/new">Create Recipe</NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

export default Navigation;
