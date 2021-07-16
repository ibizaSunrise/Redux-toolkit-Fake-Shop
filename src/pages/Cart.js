import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from '../components/ProductCard';
import {removeProductFromBasket} from '../store/slice.js'
import '../scss/blocks/productListing.scss'

export default function Cart() {

    const basket = useSelector(state => state.toolkit.basket);
    const dispatch = useDispatch()

   function removeProduct(id){
       dispatch(removeProductFromBasket(id))
   }
    return (
        <div className="products__container">
            {
                basket.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        src={product.image}
                        category={product.category}
                        desc={product.description}
                        title={product.title}
                        price={product.price}
                        handler_1={removeProduct}
                        message="Delete"

                    />
                )

                )
            }

        </div>
    )
}
