import React from 'react'
import '../scss/blocks/Header.scss'
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux'

export default function Header() {
    const basketArr = useSelector(state => state.toolkit.basket)
    const likesArr = useSelector(state => state.toolkit.likes)
    console.log(likesArr)
    return (
        <div className="header__wrapper">

            <div className="header__logo"><Link to="/">Fake Shop</Link></div>

            <div className="search"><Link to="/search">&#128269;</Link></div>
            <ul>
                <li><Link to="/like">&#10084; <span>{likesArr.length}</span></Link></li>
                <li><Link to="/cart">&#128722;</Link><span>{basketArr.length}</span></li>
            </ul>
        </div>
    )
}
