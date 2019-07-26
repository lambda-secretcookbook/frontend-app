import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import NoMatch from "./NoMatch";

import Login from "../containers/authentication/Login";
import Register from "../containers/authentication/Register";

export default () => (
  <div className="app">
    <Header />
    <Switch>
      <Route exact path="/" render={() => <div>Home</div>} />
      <Route path="/account/login" component={Login} />
      <Route path="/account/register" component={Register} />
      <Route exact path="/recipes" render={() => <div>Recipes List</div>} />
      <Route
        path="/recipes/create"
        render={() => <div>Create New Recipe</div>}
      />
      <Route exact path="/recipe/:id" render={() => <div>Recipe Detail</div>} />
      <Route path="/recipe/:id/edit" render={() => <div>Edit Recipe</div>} />
      <Route
        path="/recipe/:id/delete"
        render={() => <div>Delete Recipe</div>}
      />
      <Route component={NoMatch} />
    </Switch>
  </div>
);
