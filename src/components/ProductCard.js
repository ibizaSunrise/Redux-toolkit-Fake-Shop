import React from 'react'
import '../scss/blocks/productCard.scss'


export default function ProductCard({id, src, category, title, desc, price}) {
  
    return (
        <div className = "card__wrapper" key = {id}>
            {title}
        </div>
    )
}
