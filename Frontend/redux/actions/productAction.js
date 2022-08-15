import {
  CREATE_PRODUCT_REQ,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAIL,
} from "../constants/productCons.js";
import axios from "axios";
export const creatingProduct = (myForm) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PRODUCT_REQ });
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    const { data } = await axios.post(
      "https://3001-nnhasan0290-nextecommer-jtd50d9b3kq.ws-us60.gitpod.io//api/product/create",
      myForm,
      config
    );
    console.log(data);
    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_PRODUCT_FAIL,
      payload: error.response.data.error,
    });
  }
};
