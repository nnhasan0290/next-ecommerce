import { SAVE_SHIPPING_INFO } from "../constants/cartCons";
export const cartReducer = (state = { car: "working" }, action) => {
  switch (action.type) {
    case SAVE_SHIPPING_INFO:
      return {
        shippingInfo: action.payload,
      };
    default:
      return state;
  }
};
