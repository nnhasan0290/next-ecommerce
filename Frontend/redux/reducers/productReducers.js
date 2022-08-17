import {
  CREATE_PRODUCT_FAIL,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_REQ,
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_REQ,
} from "../constants/productCons";
export const newProductReducer = (state = {}, action) => {
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

export const getAllProductReducer = (state={},action) => {
  switch(action.type){
    case ALL_PRODUCT_REQ:
    return{
      ...state,
      loading: true,
    };
    case ALL_PRODUCT_SUCCESS:
    return{
      loading: false,
      products: action.payload.products,
      success: action.payload.success,
    }
    case ALL_PRODUCT_FAIL:
    return{
      loading: false,
      error: action.payload,
    }
    default:
    return state;
  }
}
