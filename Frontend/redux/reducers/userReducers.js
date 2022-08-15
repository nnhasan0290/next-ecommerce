import { CREATE_USER_FAILED, CREATE_USER_REQ, CREATE_USER_SUCCESS } from "../constants/userCons";

  export const newUserReducer = (state = {state: "working"}, action) => {
    switch (action.type) {
      case CREATE_USER_REQ:
        return {
          ...state,
          loading: true,
        };
        break;
      case CREATE_USER_SUCCESS:
        return {
          loading: false,
          data: action.payload.user,
          success: action.payload.success,
        };
        break;
      case CREATE_USER_FAILED:
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