import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { showAllProducts } from '../store/slice'
import axios from "axios"
import ProductCard from './ProductCard'
import '../scss/blocks/productListing.scss'
import { addToBasket, addToLikes, saveBasketToLS } from '../store/slice.js'

//___________


export default function ProductListing() {

    const { products, basket, likes } = useSelector(state => state.toolkit)
    const dispatch = useDispatch()


    // uploading products
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch(err => {
            console.log('Err', err)
        });
        dispatch(showAllProducts(response.data));
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    
  

    //handlers click props
    const AddToCart = (id) => dispatch(addToBasket(id))
    const AddToLike = (id) => dispatch(addToLikes(id))

    //lokalStorage

  
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('basket'))
        dispatch(saveBasketToLS(saved))
    }, [])
    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basket))
    }, [basket])

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

