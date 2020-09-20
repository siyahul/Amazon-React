import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import './Checkout.css'
import { getBasketTotal } from './reducer';
import { useStateValue } from './Stateprovider';
import Subtotal from './Subtotal'
import FlipMove from 'react-flip-move';

function Checkout() {
    const [{basket,user},dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src='https://firebasestorage.googleapis.com/v0/b/fullstack-haq.appspot.com/o/logo%2FFuji_TallHero_45M_v2_1x._CB432458380_.jpg?alt=media&token=bf56bf75-e09f-47a5-9786-653070301578' alt='' />
                <h3>Hello {user?.email? user.email:"Guest"}</h3>
                <h2 className="checkout__title">Your Shopping cart</h2>
                
                    {basket?.length === 0 ? (<h1>Your cart is empty</h1>) :
                        basket.map(item =>
                            (
                                <CartItem id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />
                            )
                        )
                    } 
                
                
                             
            </div>
            <div className="checkout__right">
                <Subtotal price={getBasketTotal(basket)} />
            </div>
        </div>
    )
}

export default Checkout
