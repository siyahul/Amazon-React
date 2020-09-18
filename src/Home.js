import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/September/GWBanners/Control/DesktopHero_1500x600._CB405007888_.jpg"></img>
            </div>
            <div className="home__row">
                <Product title="iPhone 11 pro" price={999} rating={5} image="https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/z/a/f/iphone-11-pro-max-256-u-mwhm2hn-a-apple-0-original-imafkg2ftc5cze5n.jpeg?q=70"/>
                <Product title="iPhone 11" price={799} rating={4} image="https://rukminim1.flixcart.com/image/352/352/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=70"/>
            </div>

            <div className="home__row">
                <Product />
                <Product />
                <Product />
            </div>
            <div className="home__row">
            <Product />
            </div>
        </div>
    )
}

export default Home
