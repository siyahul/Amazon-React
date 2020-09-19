import React from 'react'
import { useStateValue } from './Stateprovider';
import './CartItem.css'

function CartItem({id,image,title,price,rating}) {
    const [{basket},dispatch] = useStateValue();

    const basketRemove = () =>(
        dispatch({
            type: "REMOVE__FROM__BASKET",
            id:id,
        })
    );
    
    return (
        <div className="cartItem">
            <img src={image} alt ="" />
            <div className="cartItem__description">
                <p className="cartItem__title">{title}</p>
                <p><small>$</small><strong>{price}</strong></p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i)=>(<p>⭐</p>))}
                </div>
                <button onClick={basketRemove} >Remove from cart</button>
            </div>
        </div>
    )
}

export default CartItem
