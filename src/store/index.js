import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authServices from "./services/authServices";
const Store = configureStore({
  reducer: {
    [authServices.reducerPath]: authServices.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authServices.middleware]),
});

export default Store;
