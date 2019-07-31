import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { authReducer as auth } from "./auth";
import { recipesReducer as recipes } from "./recipes";

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth,
    recipes
  });
