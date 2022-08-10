import {
  CREATE_PRODUCT_FAIL,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_REQ,
} from "../constants/productCons";
export const newProductReducer = (state = { name: "hasan" }, action) => {
  switch (action.type) {
    case CREATE_PRODUCT_REQ:
      return {
        ...state,
        loading: true,
      };
      break;
    case CREATE_PRODUCT_SUCCESS:
      return {
        loading: false,
        data: action.payload.product,
        success: action.payload.success,
      };
      break;
    case CREATE_PRODUCT_FAIL:
      console.log(action.payload);
      return {
        loading: false,
        error: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};
