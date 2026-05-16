import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import "./SocialLogin.css";

const SocialLogin = ({textLable, link, loginLable, onClick }) => {
    return (
        <div className="social-login">
            <div className="social-divider-fld">
                <div className="line"></div>
                <div className="social-divider">or continue with</div>
                <div className="line"></div>
            </div>
            <div className="social-login-btns">
                <button onClick = {onClick} className="social-button">
                    <FcGoogle size={20} />
                    Google
                </button>
                <button onClick = {onClick} className="social-button">
                    <FaApple size={20} />
                    Apple
                </button>
            </div>

            <div className="signup-link">
                {textLable} <a href={link}>{loginLable}</a>
            </div>
        </div>
    )
}

export default SocialLogin;