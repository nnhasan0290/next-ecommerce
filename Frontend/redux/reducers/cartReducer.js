import { ADD_TO_CART, SAVE_SHIPPING_INFO } from "../constants/cartCons";
export const cartReducer = (state = {cartItems:[],shippingInfo:{}}, action) => {
  switch (action.type) {
    case SAVE_SHIPPING_INFO:
      return {
        shippingInfo: action.payload,
      };

      case ADD_TO_CART:
        const item = action.payload;
        const isItemExist = state.cartItems.find(each => each.product_id === item.product_id);

        if(isItemExist){
         
          return{
            ...state,
            cartItems: state.cartItems.map((each) => {
              return each.product_id === isItemExist.product_id ? item : each
            })
          }
        }else{
          return{
            ...state,
            cartItems: [...state.cartItems,item]
          }
        }
        
    default:
      return state;
  }
};
