import { ADD_TO_CART, SAVE_SHIPPING_INFO } from "../constants/cartCons";
export const cartReducer = (state = {cartItems:[],shippingInfo:{}}, action) => {
  switch (action.type) {
    case SAVE_SHIPPING_INFO:
      return {
        shippingInfo: action.payload[0],
        cartItems: action.payload[1]
      };
    default:
      return state;
  }
};
