import React from 'react'
import '../scss/blocks/productCard.scss'


export default function ProductCard({id, src, category, title, desc, price}) {
  
    return (
        <div className = "card__wrapper" key = {id}>
            <img src={src} alt="ecommerce"/>
            <div className="card__info">
                <p>{category}</p>
                <h4><b>{title}</b></h4>
                <p>${price}</p>
                <p><button>Add to Cart</button></p>
            </div>
      
        </div>
    )
}
