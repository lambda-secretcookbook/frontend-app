import React from "react";
import { NavLink } from "react-router-dom";

export default () => (
  <header className="header">
    <h1>Secret Cookbook</h1>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/recipes/new">Create New Recipe</NavLink>
    </nav>
  </header>
);
