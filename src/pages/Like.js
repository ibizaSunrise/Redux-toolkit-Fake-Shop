import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from '../components/ProductCard';
import '../scss/blocks/productListing.scss'
import { removeToLikes, saveLikesToLS } from '../store/slice.js'


export default function Like() {
    const likesArr = useSelector(state => state.toolkit.likes)
    const dispatch = useDispatch()
    console.log(likesArr)

    //handlers
    function removeProduct(id) {
        dispatch(removeToLikes(id))
    }
    //ls
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('likes'))
        dispatch(saveLikesToLS(saved))
    }, [])
    useEffect(() => {
        localStorage.setItem('likes', JSON.stringify(likesArr))
    }, [likesArr])
    return (
        <div className="products__container">
            {
                likesArr.map(product => (
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
                    />
                )

                )
            }

        </div>
    )
}
