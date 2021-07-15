import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { showAllProducts } from '../store/slice'
import axios from "axios"
import ProductCard from './ProductCard'
import '../scss/blocks/productListing.scss'
import { addToBasket, addToLSLikes } from '../store/slice.js'


export default function ProductListing() {
    const products = useSelector(state => state.toolkit.products)
    const dispatch = useDispatch()

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch(err => {
            console.log('Err', err)
        });
        dispatch(showAllProducts(response.data));
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    console.log(products)


    const AddToCart = (id) => dispatch(addToBasket(id))
    const AddToLike = (id) => dispatch(addToLSLikes(id))

    return (
        <div className="products__container">
            {products.map(product => (

                <ProductCard
                    key={product.id}
                    id={product.id}
                    src={product.image}
                    category={product.category}
                    desc={product.description}
                    title={product.title}
                    price={product.price}
                    handler_1={AddToCart}
                    handler_2={AddToLike}
                    message="Add to Cart"

                />
            ))}
        </div>
    )
}

