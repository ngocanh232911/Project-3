import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import cartUiSlice from "./shopping-cart/cartUiSlice";
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import authReducer from "../redux/authSlice"

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
    middleware: [thunk, logger],
    auth: authReducer,
  },
});

export default store;
