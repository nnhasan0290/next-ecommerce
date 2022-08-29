import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  adminDeleteProductReducer,
  adminProductReducer,
} from "./reducers/adminReducer";
import { cartReducer } from "./reducers/cartReducer";
import { getOrderReducer, orderCreateReducer } from "./reducers/orderReducer";
import {
  newProductReducer,
  getAllProductReducer,
  singleProductReducer,
  reviewProductReducer,
} from "./reducers/productReducers";
import {
  loadReducer,
  loginReducer,
  newUserReducer,
} from "./reducers/userReducers";

const rootReducer = combineReducers({
  newProducts: newProductReducer,
  newUser: newUserReducer,
  loginUser: loginReducer,
  loadUser: loadReducer,
  allProducts: getAllProductReducer,
  singleProduct: singleProductReducer,
  reviewProduct: reviewProductReducer,
  cart: cartReducer,
  orderCreate: orderCreateReducer,
  getOrder: getOrderReducer,
  adminProducts: adminProductReducer,
  adminDeleteProduct: adminDeleteProductReducer,

  totalAmount: (state = {}, action) => {
    if (action.type === "GET_TOTAL_AMOUNT") {
      return { amount: action.payload };
    } else {
      return state;
    }
  },
});

const middleware = [thunk];

const store = configureStore(
  { reducer: rootReducer },
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
