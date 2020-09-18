import React from 'react'
import './Header.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom'
import { useStateValue } from './Stateprovider';


function Header() {
    const [{basket,user},dispatch] = useStateValue();

    return (

        <div className="header">
            <Link to="/">
            <img src='https://firebasestorage.googleapis.com/v0/b/fullstack-haq.appspot.com/o/logo%2F1-12080_amazon-com-logo-png.png?alt=media&token=f10922e6-cd8d-4ae3-a23e-56917bfe56c5' alt='' className="header__logo"/>
            </Link>
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
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingCartIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
