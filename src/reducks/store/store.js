import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../users/AuthSlice";
export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
  },
});
