import React, { useState } from 'react';
import './Login&SignUp.css';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { BsKeyFill } from "react-icons/bs";
import axios from 'axios';

const LoginAndSignUp = () => {
    const navigate = useNavigate();
    const [loadingLogin, setLoadingLogin] = useState(false);
    const [loadingSignup, setLoadingSignup] = useState(false);

    // Set up Sign-up Function
    const signup = async (event) => {
        event.preventDefault();
        setLoadingSignup(true);

        try {
            const email = document.querySelector('.sign-up-form .Email').value;
            const password = document.querySelector('.sign-up-form .Password').value;
            const username = document.getElementById('Username').value;
            const code = document.getElementById('code').value;

            if (!validate_email(email) || !validate_password(password)) {
                alert('Email or Password is wrong');
                return;
            }

            if (!validate_field(username)) {
                alert('Username is required');
                return;
            }

            const response = await axios.post('https://insightbuddy.vercel.app/api/signup', {
                username,
                email,
                password,
                code,
            });

            const data = response.data;
            localStorage.setItem('token', JSON.stringify(data.token));
            alert(data.message);
            navigate('/login-signUp');
            handleSignInClick();
            document.querySelector('.sign-up-form .Email').value = "";
            document.querySelector('.sign-up-form .Password').value = "";
            document.getElementById('Username').value = "";
            document.getElementById('code').value = "";
        } catch (error) {
            console.error('Failed to create user:', error);
            alert(error.response.data.message);
        } finally {
            setLoadingSignup(false);
        }
    };

    // Set up login function
    const login = async (event) => {
        event.preventDefault();
        setLoadingLogin(true);

        try {
            const email = document.querySelector('.sign-in-form .Email').value;
            const password = document.querySelector('.sign-in-form .Password').value;

            if (!validate_email(email) || !validate_password(password)) {
                alert('Email or Password is wrong');
                return;
            }

            const response = await axios.post('https://insightbuddy.vercel.app/api/login', {
                email,
                password
            });

            const data = response.data;
            localStorage.setItem('token', JSON.stringify(data.token));
            alert(data.message);
            navigate('/admin');
            document.querySelector('.sign-in-form .Email').value = "";
            document.querySelector('.sign-in-form .Password').value = "";
        } catch (error) {
            console.error('Failed to sign in:', error);
            alert(error.response.data.message);
        } finally {
            setLoadingLogin(false);
        }
    };

    // Validate Functions
    const validate_email = (email) => {
        const expression = /^[^@]+@\w+(\.\w+)+\w$/;
        return expression.test(email);
    };

    const validate_password = (password) => {
        return password.length >= 6;
    };

    const validate_field = (field) => {
        return field != null && field.length > 0;
    };

    const handleSignUpClick = () => {
        const container = document.querySelector(".container");
        container.classList.add("sign-up-mode");
    };

    const handleSignInClick = () => {
        const container = document.querySelector(".container");
        container.classList.remove("sign-up-mode");
    };

    return (
        <div className="container">
            <div className="signin-signup">
                <form className="sign-in-form" onSubmit={login}>
                    <div className="headerImg">
                        <Link to='/home'>
                            <h3>Insight<span>Buddy</span></h3>
                        </Link>
                    </div>
                    <h2 className="title">Login</h2>
                    <div className="input-field">
                        <FaUser />
                        <input type="text" placeholder="Email" className="Email" />
                    </div>
                    <div className="input-field">
                        <FaLock />
                        <input type="password" placeholder="Password" className="Password" />
                    </div>
                    <button type="submit" className="btn" disabled={loadingLogin}>
                        {loadingLogin ? (
                            <>
                                Signing in..  &nbsp;&nbsp;&nbsp;
                                <div className="loader"></div>
                            </>
                        ) : (
                            'Sign in'
                        )}
                    </button>
                    <p className="account-text">Don't have an account?
                        <a href="#" id="sign-up-btn2" onClick={handleSignUpClick}>
                            Sign up {loadingSignup && <div className="loader"></div>}
                        </a>
                    </p>
                </form>

                <form className="sign-up-form" onSubmit={signup}>
                    <div className="headerImg">
                        <Link to='/home'>
                            <h3>Insight<span>Buddy</span></h3>
                        </Link>
                    </div>
                    <h2 className="title">Sign up</h2>
                    <div className="input-field">
                        <FaUser />
                        <input type="text" placeholder="Username" id="Username" />
                    </div>
                    <div className="input-field">
                        <FaEnvelope />
                        <input type="text" placeholder="Email" className="Email" />
                    </div>
                    <div className="input-field">
                        <FaLock />
                        <input type="password" placeholder="Password" className="Password" />
                    </div>
                    <div className="input-field">
                        <BsKeyFill  style={{fontSize: '15px'}}/> 
                        <input type="password" placeholder="Admin Code" className="Password" id="code" />
                    </div>
                    <button type="submit" className="btn" disabled={loadingSignup}>
                        {loadingSignup ? (
                            <>
                                Signing up..  &nbsp;&nbsp;&nbsp;
                                <div className="loader"></div>
                            </>
                        ) : (
                            'Sign up'
                        )}
                    </button>
                    <p className="account-text">Already have an account?
                        <a href="#" id="sign-in-btn2" onClick={handleSignInClick}>
                            Sign in {loadingLogin && <div className="loader"></div>}
                        </a>
                    </p>
                </form>
            </div>
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>Already signed up?</h3>
                        <p>Welcome to Rapid Feedback<br />Sign in to continue</p>
                        <button className="btn2" id="sign-in-btn" onClick={handleSignInClick}>Sign in</button>
                    </div>
                    <img src="../../Sign-in.jpg" alt="Signin" className="image" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>Are you an ADMIN?</h3>
                        <p>Sign up to Rapid Feedback<br />Sign up to continue</p>
                        <button className="btn2" id="sign-up-btn" onClick={handleSignUpClick}>Sign up</button>
                    </div>
                    <img src="../../sign-up.jpg" alt="SignUp" className="image" />
                </div>
            </div>
        </div>
    );
};

export default LoginAndSignUp;
