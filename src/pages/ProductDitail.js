import React, { useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { getProductById, remveSelectedProduct } from '../store/slice.js'
import '../scss/blocks/productDitail.scss'
import { Link } from 'react-router-dom';


export default function ProductDitail() {
    const product = useSelector(state => state.toolkit.product);
    const { productID } = useParams();
    const dispatch = useDispatch()
    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productID}`).catch(er => {
            console.log("Error: ", er)
        })
        dispatch(getProductById(response.data))
    };
    useEffect(() => {
        if (productID && productID !== "") fetchProductDetail()
        return () => {
            dispatch(remveSelectedProduct())
        }
    }, [productID]);
    return (
        <div className="product__container">
            <div className="product-img__wrapper">
                <img src={product.image} alt="ecommerce" />
            </div>
            <div className="product-info__wrapper">
                <h1>{product.title}</h1>
                <p>{product.category}</p>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <Link to="/"><p className="arrow">&#8592;</p></Link>
            </div>

        </div>
    )
}
