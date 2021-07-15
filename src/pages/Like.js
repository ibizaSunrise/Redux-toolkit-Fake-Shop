import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard';
import '../scss/blocks/productListing.scss'

export default function Like() {
    const likesArr = useSelector(state => state.toolkit.likes)
    console.log(likesArr)
    return (
        <div className="products__container">
            {
                likesArr.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        src={product.image}
                        category={product.category}
                        desc={product.description}
                        title={product.title}
                        price={product.price}
                        message="Delete"
                    />
                )

                )
            }

        </div>
    )
}
