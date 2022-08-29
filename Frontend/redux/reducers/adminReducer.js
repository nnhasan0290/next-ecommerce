import {
  DELETE_ADMIN_PRODUCT,
  DELETE_ADMIN_PRODUCT_FAIL,
  DELETE_ADMIN_PRODUCT_REQ,
  GET_ALL_PRODUCT_ADMIN_FAIL,
  GET_ALL_PRODUCT_ADMIN_REQ,
  GET_ALL_PRODUCT_ADMIN_SUCCESS,
} from "../constants/adminCons";

export const adminProductReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT_ADMIN_REQ:
      return {
        loading: true,
      };
    case GET_ALL_PRODUCT_ADMIN_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        success: true,
      };
    case GET_ALL_PRODUCT_ADMIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};


export const adminDeleteProductReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ADMIN_PRODUCT_REQ:
      return {
        loading: true,
      };
    case DELETE_ADMIN_PRODUCT:
      return {
        loading: false,
        message: action.payload.message,
        success: true,
      };
    case DELETE_ADMIN_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case "CLEAR_ERRORS":
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
