import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartProduct from '../components/CartProduct';
import { removeProductFromBasket, saveBasketToLS, changeAmount, getSum, addToBasket } from '../store/slice.js'
import '../scss/blocks/cart.scss'
import CartCalculate from '../components/CartCalculate'
//_____________



export default function Cart() {

    const basket = useSelector(state => state.toolkit.basket);
    const dispatch = useDispatch()
    const [value, setValue] = useState(1)

    console.log(basket)
    const sum = useSelector(state => state.toolkit.sum);
    console.log(sum)

    useEffect(() => {
        dispatch(getSum())
    }, [removeProductFromBasket, saveBasketToLS, changeAmount, getSum, basket, addToBasket])// ???

    function removeProduct(id) {
        dispatch(removeProductFromBasket(id))

    }

    function handlerChange(v, id) {
        console.log(v)
        console.log(id)
        setValue(v)
        dispatch(changeAmount({
            id: id,
            amount: v
        }))

    }


    //LS
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('basket'))
        dispatch(saveBasketToLS(saved))
    }, [])
    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basket))
    }, [basket])



    return (
        <>
            <div className="cart">
                {
                    basket.map(product => (
                        <CartProduct
                            amount = {product.amount}
                            handler_2={handlerChange}
                            key={product.id}
                            id={product.id}
                            src={product.image}
                            category={product.category}
                            title={product.title}
                            price={product.price}
                            handler_1={removeProduct}
                            message="Delete"

                        />
                    )

                    )
                }

            </div>
            <CartCalculate sum={sum} />

        </>
    )
}
