// Slice for balance
import { createSlice } from "@reduxjs/toolkit";

export const balanceSlice = createSlice({
  // state 'name' & initial value
  name: "balance",
  initialState: {
    value: 500,
  },
  // declare actions & reducers - action: reducer (ie action name: reducer "function")
  reducers: {
    deposit: (state, action) => {
      state.value += action.payload;
    },
    withdraw: (state, action) => {
      state.value -= action.payload;
    },
    addInterest: (state) => {
      state.value += state.value * 0.05;
    },
    payCharges: (state) => {
      state.value -= state.value * 0.15;
    },
  },
});

// export all the actions for store as destructured object from balanceSlice.actions
export const { deposit, withdraw, addInterest, payCharges } =
  balanceSlice.actions;

// export reducer for store
export default balanceSlice.reducer;
