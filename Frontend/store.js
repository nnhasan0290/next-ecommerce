import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


const productReducer = (state = { name: "hasan" }, action) => {
  return { name: "nazmul" };
};
const middleware = [thunk];
const rootReducer = combineReducers({
  products: productReducer,
});

const store = configureStore(
  { reducer: rootReducer },
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
