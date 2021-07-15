import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard';
import '../scss/blocks/productListing.scss'

export default function Cart() {
   
    const cart = useSelector(state => state.toolkit.basket);

    console.log(cart)
    return (
        <div className = "products__container">
            {
                cart.map(product => (
                    <ProductCard
                        key = {product.id}
                        id={product.id}
                        src={product.image}
                        category={product.category}
                        desc={product.description}
                        title={product.title}
                        price={product.price}
                        // handler={handler}
                        message = "Delete"

                    />
                )

                )
            }

        </div>
    )
}
