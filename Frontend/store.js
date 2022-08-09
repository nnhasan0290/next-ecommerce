import { combineReducers, configureStore } from "@reduxjs/toolkit";

let initialState = 'initial state';

const productReducer = (state={name: "hasan"}, action) => {
    return {name: "nazmul"};
}
const reducer = combineReducers({
    products: productReducer 
})

const store = configureStore({reducer});
export default store;