import React from 'react'
import "../scss/blocks/cartCalculate.scss"
// import { useSelector, useDispatch } from 'react-redux'

export default function CartCalculate() {

    // const basket = useSelector(state => state.toolkit.basket);
    // const dispatch = useDispatch()
    return (
        <div className= "cart-calculate__wrapper">
            <div className = "cart-calculate__sum">
               <h2>Sum: $</h2> 
            </div>
            <div className = "cart-calculate__btn">
                <button>payment</button>
            </div>
            <div className = "cart-calculate__approach">
                <div>approach 1</div>
                <div>approach 2</div>
                <div>approach 3</div>
            </div>
            
        </div>
    )
}
