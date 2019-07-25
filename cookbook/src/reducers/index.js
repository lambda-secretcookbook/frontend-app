import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { userReducer } from "./user";
import { recipesReducer } from "./recipes";

export default history =>
  combineReducers({
    router: connectRouter(history),
    user: userReducer,
    recipes: recipesReducer
  });
