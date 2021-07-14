import React from 'react'
import '../scss/blocks/Header.scss'
import {Link} from "react-router-dom";


export default function Header() {
    return (
        <div className="header__wrapper">

            <div className="header__logo"><Link to="/">Fake Shop</Link></div>
            <div className="search">&#128269;</div>
            <ul>
                <li><Link to="/like">&#10084; <span></span></Link></li>
                <li><Link to="/cart">&#128722;</Link><span></span></li>
            </ul>
        </div>
    )
}
