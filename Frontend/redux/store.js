import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { newProductReducer } from "./reducers/productReducers";
import { newUserReducer } from "./reducers/userReducers";

const rootReducer = combineReducers({
  newProducts: newProductReducer,
  newUser: newUserReducer,
});

const middleware = [thunk];

const store = configureStore(
  { reducer: rootReducer },
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
