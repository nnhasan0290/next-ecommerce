import {
  CREATE_PRODUCT_REQ,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAIL,
} from "../constants/productCons.js";
import axios from "axios";
export const creatingProduct = (myForm) => async (dispatch) => {
  try {
    console.log(myForm.get("name"));
    dispatch({ type: CREATE_PRODUCT_REQ });
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    const { data } = await axios.post(
      "http://localhost:3001/api/product/create",
      myForm,
      config
    );
    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CREATE_PRODUCT_FAIL, payload: error });
  }
};
