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
      withCredentials: true
    };
    const { data } = await axios.post(
      "http://localhost:3001/api/product/create",
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

export const getAllProducts = (keyword="") => async(dispatch) => {
  try{
    dispatch({type:ALL_PRODUCT_REQ});
    const link = `http://localhost:3001/api/products?keyword=${keyword}`;
    const {data} = await axios.get(link);
    dispatch({type:ALL_PRODUCT_SUCCESS, payload:data});

  }catch(error){
    dispatch({type:ALL_PRODUCT_FAIL,payload:error.response.data.error});
  }
} 
