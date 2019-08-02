import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";

import { Container } from "react-bootstrap";

import Masthead from "./components/Masthead";
import NoMatch from "./components/NoMatch";

import Home from "./components/Home";

import PrivateRoute from "./components/auth/PrivateRoute";
import Login from "./containers/auth/Login";
import Register from "./containers/auth/Register";

import RecipeList from "./containers/recipes/RecipeList";
import RecipeDetail from "./containers/recipes/RecipeDetail";
import RecipeCreate from "./containers/recipes/RecipeCreate";

import configureStore, { history } from "./configureStore";
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Masthead />
      <Container>
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
          <PrivateRoute
            path="/recipe/:id/delete"
            render={() => <div>Delete Recipe</div>}
          />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
