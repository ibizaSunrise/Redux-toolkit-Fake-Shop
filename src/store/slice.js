import { createSlice } from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        basket: [],
        likes: [],
        product: {},
        sum: ''
    },
    reducers: {
        showAllProducts(state, action) {
            state.products = action.payload
        },
        //product
        getProductById(state, action){
            state.product = action.payload;
        },
        remveSelectedProduct(state, action){
            state.product = {}
        },
        //Basket
        addToBasket(state, action) {
            let product = state.products.filter((el) => el.id === action.payload);
            [product] = product;
            if (state.basket.length === 0)
                state.basket.push({...product,
                amount: 1})
            if (product && state.basket.filter(el => el.id === product.id).length === 0) state.basket.push({...product,
                amount: 1})
        },
        
        changeAmount(state, action) {
            state.basket.map(el => el.id === action.payload.id ? el.amount = action.payload.amount : el)
        },
        saveBasketToLS(state, action) {
            state.basket = action.payload
        },
        removeProductFromBasket(state, action) {
            state.basket = state.basket.filter(el => el.id !== action.payload)
        },
        getSum(state){
           state.sum = state.basket.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.amount), 0)
        },

        //Likes
        saveLikesToLS(state, action) {
            state.likes = action.payload
        },
        addToLikes(state, action) {
            let like = state.products.filter((el) => el.id === action.payload);
            [like] = like;
            if (state.likes.length === 0)
                state.likes.push({
                    ...like,
                    marked: true
                })
            if (like && state.likes.filter(el => el.id === like.id).length === 0) state.likes.push({
                ...like,
                marked: true
            })

        },
        removeToLikes(state, action) {
            state.likes = state.likes.filter(el => el.id !== action.payload)
        }
    }
})

export default toolkitSlice.reducer;
export const {
    showAllProducts,
    addToBasket,
    addToLikes,
    removeToLikes,
    saveBasketToLS,
    saveLikesToLS,
    removeProductFromBasket,
    getProductById,
    remveSelectedProduct,
    changeAmount,
    getSum

} = toolkitSlice.actions;