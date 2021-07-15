import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { showAllProducts } from '../store/slice'
import axios from "axios"
import ProductCard from './ProductCard'
import '../scss/blocks/productListing.scss'
import {addToBasket} from '../store/slice.js'


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


    const handler = (id) => dispatch(addToBasket(id))

    return (
        <div className = "products__container">
            {products.map(product => (

                <ProductCard
                    id={product.id}
                    src={product.image}
                    category={product.category}
                    desc={product.description}
                    title={product.title}
                    price={product.price}
                    handler = {handler}
                    message = "Add to Cart"

                />
            ))}
        </div>
    )
}

