import React, { useState } from 'react'
import '../scss/blocks/search.scss'
import ProductListing from '../components/ProductListing'

export default function Search() {
    const [toggleState, setToggleState] = useState(1)
    const arrPath = ['https://fakestoreapi.com/products/category/electronics', 'https://fakestoreapi.com/products/category/jewelery', `https://fakestoreapi.com/products/category/men's clothing`, `https://fakestoreapi.com/products/category/women's clothing`]

  
    const toggleTab = (index) => {
        setToggleState(index)
    }

    const content = arrPath.map((el, index) => (
        index + 1 === toggleState && <ProductListing path={el} />
    ))

    return (
        <div className="search__container">
            <div className="bloc-tabs">
                <div className={toggleState === 1 ? "tabs tabs-active" : "tabs"} onClick={() => toggleTab(1)}>electronics</div>
                <div className={toggleState === 2 ? "tabs tabs-active" : "tabs"} onClick={() => toggleTab(2)}>jewelery</div>
                <div className={toggleState === 3 ? "tabs tabs-active" : "tabs"} onClick={() => toggleTab(3)}>men's clothing</div>
                <div className={toggleState === 4 ? "tabs tabs-active" : "tabs"} onClick={() => toggleTab(4)}>women's clothing</div>
            </div>

            {content}

        </div>
    )
}
