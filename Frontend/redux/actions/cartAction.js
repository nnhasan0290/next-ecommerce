import { ADD_TO_CART, SAVE_SHIPPING_INFO } from "../constants/cartCons";
import axios from "axios";

export const saveShippingInfo = (data) => (dispatch) => {
  dispatch({ type: SAVE_SHIPPING_INFO, payload: data });
};

export const addingCartItems = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_GITPOD_HOST}/api/product/singleproduct?id=${id}`
  );

  dispatch({ type: ADD_TO_CART, payload: {
    product_id:data.product._id,
    name:data.product.name,
    stock: data.product.stock,
    image: data.product.images[0].url,
    price: data.product.price,
    quantity
   } });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
