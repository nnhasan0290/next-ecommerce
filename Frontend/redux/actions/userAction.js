import axios from "axios";
import {
  CREATE_USER_REQ,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
  LOGIN_USER_REQ,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOAD_USER_REQ,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILED,
} from "../constants/userCons";
export const createUserAction = (myForm) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_USER_REQ });
    const config = {
      header: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.post(
      "https://3001-nnhasan0290-nextecommer-jtd50d9b3kq.ws-us60.gitpod.io/api/user/creating",
      myForm,
      config
    );
    dispatch({ type: CREATE_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CREATE_USER_FAILED, payload: error.response.data.error });
  }
};

export const loginUser = (myForm) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_USER_REQ });
    const config = {
      header: {
        "Content-Type": "multipart/form-data",
        withCredentials: true,
        credentials: "include",
      },
    };
    const { data } = await axios.post(
      "https://3001-nnhasan0290-nextecommer-jtd50d9b3kq.ws-us60.gitpod.io/api/user/login",
      myForm,
      config
    );
    dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGIN_USER_FAILED, payload: error.response.data.error });
  }
};

//LOAD USER
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQ });

    const { data } = await axios.get(
      "https://3001-nnhasan0290-nextecommer-jtd50d9b3kq.ws-us60.gitpod.io/api/user/load"
    );

    dispatch({ type: LOAD_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAILED, payload: error.response.data.error });
  }
};
