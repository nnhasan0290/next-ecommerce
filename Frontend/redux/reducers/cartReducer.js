import { LOCALHOST, SAVE_SHIPPING_INFO } from "../constants/cartCons";
export const cartReducer = (state = {cartItems:[],shippingInfo:{}}, action) => {
  switch (action.type) {
    case SAVE_SHIPPING_INFO:
      return {
        shippingInfo: action.payload[0],
        cartItems: action.payload[1]
      };
      case LOCALHOST: 
      return{
        allcartItems: action.payload
      }
    default:
      return state;
  }
};
