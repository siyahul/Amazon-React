import React from 'react'
import './Header.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
            <img src='https://firebasestorage.googleapis.com/v0/b/fullstack-haq.appspot.com/o/logo%2F1-12080_amazon-com-logo-png.png?alt=media&token=f10922e6-cd8d-4ae3-a23e-56917bfe56c5' alt='' className="header__logo"/>
            <div className="header__search">
                <input type="text" className="header__searchInput" placeholder="Search" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Haq</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Return</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <div className="header__optionBasket">
                    <ShoppingCartIcon />
                    <span className="header__optionLineTwo header__basketCount">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
