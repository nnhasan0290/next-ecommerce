import { SAVE_SHIPPING_INFO } from "../constants/cartCons";

export const saveShippingInfo = (data) => (dispatch) =>{
    dispatch({type: SAVE_SHIPPING_INFO, payload: data});
}