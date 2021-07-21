import React from 'react'
import '../scss/blocks/productCard.scss'
import { Link } from 'react-router-dom'

export default function ProductCard({id, src, category, title, price, handler_1, handler_2, message}) {

    return (
        <div className = "card__wrapper" key = {id}>
           <span className = 'like' onClick = {() =>handler_2(id)}>&#10084;</span>
            <Link to = {`/product/${id}`}>
            <img src={src} alt="ecommerce"/>
            </Link>
            <div className="card__info">
                <p>{category}</p>
                <h4><b>{title}</b></h4>
                <p>${price}</p>
                <p><button onClick = {() =>handler_1(id)}>{message}</button></p>
            </div>
      
        </div>
    )
}
