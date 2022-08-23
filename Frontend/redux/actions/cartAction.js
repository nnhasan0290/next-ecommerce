import { ADD_TO_CART, SAVE_SHIPPING_INFO } from "../constants/cartCons";
import axios from "axios";

export const saveShippingInfo = (data) => (dispatch) => {
  console.log(data);
  dispatch({ type: SAVE_SHIPPING_INFO, payload: data });
};

