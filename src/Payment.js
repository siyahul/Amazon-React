import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from './axios';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import CartItem from './CartItem';
import './Payment.css'
import { getBasketTotal } from './reducer';
import {useStateValue} from './Stateprovider'

function Payment() {
    const [{basket,user}] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const [processing,setProcessing] = useState('');
    const [succeeded,setSucceeded] = useState(false);
    const [error,setError] = useState(null);
    const [disabled,setDisabled] = useState(true);
    const [clientSecret,setClientSecret] = useState(true);


    useEffect(()=>{
        const getClientSecret = async () => {
            const response = await axios({
                method:'post',
                url: `/payments/create?total=${getBasketTotal(basket)*100}`
            });
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret();
    },[basket])

    console.log("the secret is >>>", clientSecret);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replace('/orders');
        })


    }

    const handleChange = e =>{
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout(<Link to="checkout">{basket?.length}items</Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivary address</h3>
                    </div>
                    <div className="payment__adress">
                        <p>{user?.email}</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title" >
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item=>(<CartItem 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />))}
                    </div>
                </div>

                <div className="payment__section">
                            <div className="payment__title">
                                <h3>Payment Methord</h3>
                            </div>
                            <div className="payment__details">
                                <form onSubmit={handleSubmit}>
                                    <CardElement onChange={handleChange}/>

                                    <div className="payment__priceContainer">
                                    
                                    <CurrencyFormat renderText={(value)=>(
                                        <h3> Order Total: ({basket?.length} items): {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                    />

                                    <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "BuyNow"}</span>
                                    </button>

                                    </div>

                                    {error && <div>{error}</div>}
                                </form>
                            </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
