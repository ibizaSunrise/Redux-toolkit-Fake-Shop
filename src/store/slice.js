import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        basket: [],
        likes: [],
    },
    reducers: {
        showAllProducts(state, action) {
            state.products = action.payload
        },
        addToBasket(state, action) {
            let product = state.products.filter((el) => el.id === action.payload);
            [product] = product;
            state.basket.push(product);
        },
        addToLSLikes(state, action) {
            let like = state.products.filter((el) => el.id === action.payload);
            [like] = like;
            if(state.likes.length === 0)
            state.likes.push(like)
            if(like && state.likes.filter(el => el.id === like.id).length === 0 )state.likes.push(like)
          
        }


    }
})

export default toolkitSlice.reducer;
export const { showAllProducts, addToBasket, addToLSLikes } = toolkitSlice.actions;