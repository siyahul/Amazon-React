import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {auth} from './firebase'
import './Login.css'

function Login() {

    const [email,setEmail] = useState('');
    const [password,setPassword ] = useState('');
    const history = useHistory();
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            if(auth){
                history.push('/')
            }
            
        }).catch(err=>alert(err.message))
    }

    const register = e => {
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(auth => {console.log(auth);
            if(auth){
                history.push('/');
            }
        })
        .catch(err =>alert(err.message));
        setEmail('');
        setPassword('');
        
    }

    return (
        <div className="login">
            <Link to="/">
             <img className="login__logo" src ="https://firebasestorage.googleapis.com/v0/b/fullstack-haq.appspot.com/o/logo%2F1-12080_amazon-com-logo-png.png?alt=media&token=f10922e6-cd8d-4ae3-a23e-56917bfe56c5" alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                    <button type="submit" className="login__signInButton" onClick={signIn}>Sign-in</button>
                </form>
                <p>
                    By signing in you agree to the amazon clone
                    conditions of use and sale. Please see our Privacy Policy
                    Noticce, our terms and our Interest-Based ads Notice.
                </p>
                <button className="login__registerButton" onClick={register}>You didn't have an account</button>
            </div>
            
        </div>
    )
}

export default Login
