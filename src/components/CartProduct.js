import React from 'react'
import '../scss/blocks/cartProduct.scss'

export default function CartProduct({id, src, category, title, desc, price, handler_1, handler_2, message}) {
    return (
        <div className = "cart-product__wrapper" key = {id}>
            <div className="cart-product__img">
            <img src={src} alt="ecommerce"/>
            </div>
            <div className="cart-product__info">
            <p>{category}</p>
                <h4><b>{title}</b></h4>
                <p>${price}</p>
                <p>Amount <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    </select></p>
                <p><button onClick = {() =>handler_1(id)}>{message}</button></p>
            </div>
         
        </div>
    )
}
