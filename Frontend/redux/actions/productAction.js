import {
  CREATE_PRODUCT_REQ,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAIL,
  ALL_PRODUCT_REQ,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
} from "../constants/productCons.js";
import axios from "axios";

export const creatingProduct = (myForm) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PRODUCT_REQ });
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    };
    const { data } = await axios.post(
      "https://3001-nnhasan0290-nextecommer-oyfekk44ino.ws-us62.gitpod.io/api/product/create",
      myForm,
      config
    );
    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_PRODUCT_FAIL,
      payload: error.response.data.error,
    });
  }
};

export const getAllProducts =
  (keyword = "", price = [0, 1000], page = 1, category = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_PRODUCT_REQ });
      let link = `https://3001-nnhasan0290-nextecommer-oyfekk44ino.ws-us62.gitpod.io/api/products?keyword=${keyword}&price[$gte]=${price[0]}&price[$lte]=${price[1]}&page=${page}`;
      if (category && category !== 'All') {
         link = `https://3001-nnhasan0290-nextecommer-oyfekk44ino.ws-us62.gitpod.io/api/products?keyword=${keyword}&price[$gte]=${price[0]}&price[$lte]=${price[1]}&page=${page}&category=${category}`;
      }

      const { data } = await axios.get(link);
      dispatch({ type: ALL_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ALL_PRODUCT_FAIL, payload: error.response.data.error });
    }
  };
