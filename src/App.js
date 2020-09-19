import React,{ useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './Stateprovider';

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
