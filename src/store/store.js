import { configureStore } from "@reduxjs/toolkit";

// import reducers
import balanceReducer from "./balance";

export default configureStore({
  reducer: {
    balance: balanceReducer,
  },
});
