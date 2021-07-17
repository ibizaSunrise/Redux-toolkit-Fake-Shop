import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartProduct from '../components/CartProduct';
import { removeProductFromBasket, saveBasketToLS } from '../store/slice.js'
import '../scss/blocks/cart.scss'
import CartCalculate from '../components/CartCalculate'
//_____________


export default function Cart() {

    const basket = useSelector(state => state.toolkit.basket);
    const dispatch = useDispatch()
    dispatch(saveBasketToLS(basket)) 
    function removeProduct(id) {
        dispatch(removeProductFromBasket(id)) 
        
    }
    
    
    
    return (
        <>
            <div className="cart">
                {
                    basket.map(product => (
                        <CartProduct
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
            <CartCalculate />

        </>
    )
}
