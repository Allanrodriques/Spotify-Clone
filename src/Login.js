import React from 'react'
import { loginUrl } from './spotify';
import './css/Login.css';

function Login() {
    return (
        <div className="login">
            <img src="./images/logo.jpg" alt="" />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
