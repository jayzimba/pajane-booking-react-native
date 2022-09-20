import { configureStore } from "@reduxjs/toolkit";
import adultReducer from "../features/AdultSlice";

export const store = configureStore({
  reducer: {
    counter: adultReducer,
  },
});
