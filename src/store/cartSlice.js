import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
  hydrate:(state, action) => {
  // do not do state = action.payload it will not update the store
  return action.payload
  },
  deleteProduct: (state, action) => {
        state = action.payload;
      },
    },
  });