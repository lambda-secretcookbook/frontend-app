import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import NoMatch from "./components/NoMatch";

import Login from "./containers/auth/Login";
import Register from "./containers/auth/Register";

import RecipeList from "./containers/recipes/RecipeList";
import RecipeCreate from "./containers/recipes/RecipeCreate";

import configureStore, { history } from "./configureStore";
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <div>Home</div>} />
        <Route path="/account/login" component={Login} />
        <Route path="/account/register" component={Register} />
        <Route exact path="/recipes" component={RecipeList} />
        <Route path="/recipes/new" component={RecipeCreate} />
        <Route
          exact
          path="/recipe/:id"
          render={() => <div>Recipe Detail</div>}
        />
        <Route path="/recipe/:id/edit" render={() => <div>Edit Recipe</div>} />
        <Route
          path="/recipe/:id/delete"
          render={() => <div>Delete Recipe</div>}
        />
        <Route component={NoMatch} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
