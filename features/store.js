import { configureStore } from "@reduxjs/toolkit";
//apis
import tShirt from "./actions/tShirtAPI";
import authApi from "./actions/authAPI";
//reducers

const store = configureStore({
  reducer: {
    [tShirt.reducerPath]: tShirt.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tShirt.middleware, authApi.middleware),
});

export default store;
