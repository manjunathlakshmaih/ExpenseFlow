import React from "react";
import { useLocation } from "react-router-dom";
import expense_icon from '../../../assets/images/illustration.png';
import signup_image from '../../../assets/images/signup_ill.png';
import logo from '../../../assets/images/expns_logo.png';
import "./AuthBanner.css";

const AuthBanner = () => {
    const location = useLocation();
    const isRegisterPage = location.pathname === "/register";

    const content  =  isRegisterPage ? {
        welcome: "Create your account",
        title: "Start Tracking your expenses smartly",
        subtitle : "Join thousands of users who are managing their finances better",
        image : signup_image
    } : {
        welcome: "Welcome Back! 👋",
        title: "Track your expenses and save more.",
        subtitle : "Login to your Account and continue managing your finance.",
        image : expense_icon
    };
    return (
        <div className="auth-banner">
            <div className="auth-header">
                <p className="expns_title"><img className="logo" src={logo}/>ExpenseTracker</p>
            </div>
            <div className={`auth-body ${isRegisterPage? "register": "login"}`}>
                <p>{content.welcome}</p>
                <h2>{content.title}</h2>
                <p>{content.subtitle}</p>
            </div>
            <div className={`auth-footer ${isRegisterPage? "register": "login"}`}>
                <img src={content.image} alt="Auth Banner" className="auth-image" />
            </div>
        </div>
    )
}

export default AuthBanner;