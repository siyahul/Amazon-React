import React from 'react'
import { useStateValue } from './Stateprovider';
import './CartItem.css'

function CartItem({id,image,title,price,rating}) {
    const [{basket},dispatch] = useStateValue();

    const basketRemove= () =>{
        console.log(basket);

    }
    return (
        <div className="cartItem">
            <img src={image} alt ="" />
            <div className="cartItem__description">
                <p>{title}</p>
                <p><small>$</small><strong>{price}</strong></p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i)=>(<p>⭐</p>))}
                </div>
                <button onclick={basketRemove}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CartItem
