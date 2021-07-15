import {  createSlice } from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        basket: []  
    },

    reducers: {
        showAllProducts(state, action){
            state.products = action.payload
        },
        addToBasket(state, action){
            let product = state.products.filter((el) => el.id === action.payload);
            [product] = product;
            state.basket.push(product);
        }
      
    }
})

export default toolkitSlice.reducer;
export const {showAllProducts, addToBasket} = toolkitSlice.actions;