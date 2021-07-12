import React from 'react'
import '../scss/blocks/Header.scss'

export default function Header() {
    return (
        <div className = "header__wrapper">
            <div className = "header__logo">Fake Shop</div>
            <ul>
                <li>&#128269;</li>
                <li>&#128722;</li>
            </ul>
        </div>
    )
}
