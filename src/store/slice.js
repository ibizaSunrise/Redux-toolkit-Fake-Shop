import {  createSlice } from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
    name: 'products',
    initialState: {
        products: []
    },
    reducers: {
        showAllProducts(state, action){
            state.products = action.payload
        }
    }
})

export default toolkitSlice.reducer;
export const {showAllProducts} = toolkitSlice.actions;