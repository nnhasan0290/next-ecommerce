import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { newProductReducer,getAllProductReducer } from "./reducers/productReducers";
import { loadReducer, loginReducer, newUserReducer } from "./reducers/userReducers";

const rootReducer = combineReducers({
  newProducts: newProductReducer,
  newUser: newUserReducer,
  loginUser: loginReducer,
  loadUser: loadReducer,
  allProducts: getAllProductReducer
});

const middleware = [thunk];

const store = configureStore(
  { reducer: rootReducer },
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
