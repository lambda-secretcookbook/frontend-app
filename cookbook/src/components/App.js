import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Masthead from "../components/Masthead";
import NoMatch from "../components/NoMatch";

import Home from "../components/Home";

import PrivateRoute from "../components/auth/PrivateRoute";
import Login from "../containers/auth/Login";
import Register from "../containers/auth/Register";

import RecipeList from "../containers/recipes/RecipeList";
import RecipeDetail from "../containers/recipes/RecipeDetail";
import RecipeCreate from "../containers/recipes/RecipeCreate";

const App = () => (
  <div className="app">
    <Masthead />
    <Container className="mt-3">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/account/login" component={Login} />
        <Route path="/account/register" component={Register} />
        <PrivateRoute exact path="/recipes" component={RecipeList} />
        <PrivateRoute path="/recipes/new" component={RecipeCreate} />
        <PrivateRoute exact path="/recipe/:id" component={RecipeDetail} />
        <PrivateRoute
          path="/recipe/:id/edit"
          render={() => <div>Edit Recipe</div>}
        />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </div>
);

export default App;
