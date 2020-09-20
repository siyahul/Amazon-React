import React,{ useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Payment from './Payment.js'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './Stateprovider';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51HT5jVDihhdmGeEPbDKtqjIRcliuRCwpJXpg4g7wui3ZOGcQ9cF3Cw5tszBtySmrPFMlKVlDvkIOCE7C129L1DNE00C6o1ftmd');


function App() {
  
  const [{},dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authuser => {console.log('Auth user >>>>',authuser);
    if(authuser){
      dispatch({
        type: 'SET_USER',
        user: authuser
      })
    }else{
      dispatch({
        type: 'SET_USER',
        user: null
      })
    }
  })
  },[])
  return (
    <Router>
      <div className="app">
        <Switch>

        <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            
        </Route>

        <Route path="/login">
            <Login />
        </Route>

        <Route path="/checkout">
            <Header />
            <Checkout />
        </Route>

        <Route path="/">
            <Header />
            <Home />
        </Route>


        </Switch>
      
    </div>
    </Router>
    
  );
}

export default App;
