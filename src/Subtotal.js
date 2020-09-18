import React, { useState } from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './Stateprovider';
function Subtotal({price}) {
    const [{basket,user},dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat renderText={(value)=>(
                <>
                    <p>
                        Subtotal ({basket?.length} items):<strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" />This order contains gift cards
                    </small>
                </>
            )}
            decimalScale={2}
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
