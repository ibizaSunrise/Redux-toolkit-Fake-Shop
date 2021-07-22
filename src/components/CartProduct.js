import React from 'react'
import '../scss/blocks/cartProduct.scss'

export default function CartProduct({ id, src, category, title, price, handler_1, handler_2, message, amount }) {

    return (
        <div className="cart-product__wrapper" key={id}>
            <div className="cart-product__img">
                <img src={src} alt="ecommerce" />
            </div>
            <div className="cart-product__info">
                <p>{category}</p>
                <h4><b>{title}</b></h4>
                <p>${price * amount}</p>
                <p>Amount <select
                    value={amount} onChange={e => handler_2(e.target.value, id)} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select></p>
                <p><button onClick={() => handler_1(id)}>{message}</button></p>
            </div>

        </div>
    )
}
