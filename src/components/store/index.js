import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../reducers/countReducer";
import addReducer from "../reducers/cartSlice";

export const store = configureStore({
  reducer: {
    counter: countReducer,
    cart:addReducer,
  },
});
