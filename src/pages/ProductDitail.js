import React, { useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { getProductById, remveSelectedProduct } from '../store/slice.js'
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
        <div>
            <img src={product.image} alt="" />
        </div>
    )
}
