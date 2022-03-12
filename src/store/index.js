import { configureStore } from "@reduxjs/toolkit";
import togglerReducer from "./toggleSlice";
const store = configureStore({
  reducer: {
    toggler: togglerReducer,
  },
});

export default store;
