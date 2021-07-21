import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from '../components/ProductCard';
import '../scss/blocks/productListing.scss'
import { removeToLikes, saveLikesToLS, addToBasket, saveBasketToLS } from '../store/slice.js'


export default function Like() {
    const {likes, basket} = useSelector(state => state.toolkit)
    const dispatch = useDispatch()


    //handlers
    function removeProduct(id) {
        dispatch(removeToLikes(id))
    }

    const AddToCart = (id) => dispatch(addToBasket(id))
    //ls
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('likes'))
        dispatch(saveLikesToLS(saved))
    }, [])
    useEffect(() => {
        localStorage.setItem('likes', JSON.stringify(likes))
    }, [likes])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('basket'))
        dispatch(saveBasketToLS(saved))
    }, [])
    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basket))
    }, [basket])
    return (
        <div className="products__container">
            {
                likes.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        src={product.image}
                        category={product.category}
                        desc={product.description}
                        title={product.title}
                        price={product.price}
                        message="AddToCart"
                        handler_2={removeProduct}
                        handler_1={AddToCart}
                    />
                )

                )
            }

        </div>
    )
}
