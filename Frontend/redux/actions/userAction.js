import axios from "axios";
import {
  CREATE_USER_REQ,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
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
