import {
  CREATE_PRODUCT_FAIL,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_REQ,
} from "../constants/productCons";
export const productReducer = (state = { name: "hasan" }, action) => {
  switch (action.type) {
    case CREATE_PRODUCT_REQ:
      return {
        ...state,
        loading: true,
      };
      break;
    case CREATE_PRODUCT_SUCCESS:
      console.log(action.payload);
      return {
        loading: false,
        data: action.payload,
      };
      break;
    case CREATE_PRODUCT_FAIL:
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
