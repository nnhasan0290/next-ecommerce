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
      "http://localhost:3001/api/user/creating",
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
      },
      withCredentials: true,
    };
    const { data } = await axios.post(
      `http://localhost:3001/api/user/login`,
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

    const { data } = await axios.get(`http://localhost:3001/api/user/load`,{withCredentials:true});

    dispatch({ type: LOAD_USER_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.response.data);
    dispatch({ type: LOAD_USER_FAILED, payload: error.response.data.error });
  }
};
