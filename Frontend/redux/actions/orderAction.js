import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQ,
  ORDER_CREATE_SUCCESS,
  ORDER_GET_FAIL,
  ORDER_GET_REQ,
  ORDER_GET_SUCCESS,
} from "../constants/orderCons";
import axios from "axios";

export const createOrder = (info) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_CREATE_REQ });
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.post(
      `https://3001-nnhasan0290-nextecommer-oyfekk44ino.ws-us63.gitpod.io/api/order/create`,
      info,
      config
    );

    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ORDER_CREATE_FAIL, payload: error.response.data.error });
  }
};

export const getOrders = () => async (dispatch) => {
  try {
    dispatch({ type: ORDER_GET_REQ });
    const { data } = await axios.get(
      `https://3001-nnhasan0290-nextecommer-oyfekk44ino.ws-us63.gitpod.io/api/order/get`
    );

    dispatch({ type: ORDER_GET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ORDER_GET_FAIL, payload: error.response.data.error });
  }
};
