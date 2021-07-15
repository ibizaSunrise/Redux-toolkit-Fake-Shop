import React from 'react'
import '../scss/blocks/productCard.scss'


export default function ProductCard({id, src, category, title, desc, price, handler, message}) {

  
    return (
        <div className = "card__wrapper" key = {id}>
            <img src={src} alt="ecommerce"/>
            <div className="card__info">
                <p>{category}</p>
                <h4><b>{title}</b></h4>
                <p>${price}</p>
                <p><button onClick = {() =>handler(id)}>{message}</button></p>
            </div>
      
        </div>
    )
}
