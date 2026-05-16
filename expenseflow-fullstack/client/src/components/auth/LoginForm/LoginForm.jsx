import React, { useState } from "react";
import { TbLockPassword } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./LoginForm.css";

const LoginForm = ({ onsubmit }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const FormData = {
            email,
            password
        }
        onsubmit(FormData);
    }

    return (
        <div className="login-form">
            <div className="login-header">
                <h2>Login to your account</h2>
                <p>Welcome Back! Please enter your details.</p>
            </div>
            <form className="login-body" onSubmit={handleSubmit}>
                <div className="input-field">
                    <label htmlFor="email" className="login-label">Email</label>
                    <div className="input-container">
                        <MdOutlineEmail className="input-icon" size={22} />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="login-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="input-field">
                    <label htmlFor="password" className="login-label">Password</label>
                    <div className="input-container">
                        <TbLockPassword className="input-icon" size={22} />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="login-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {/* <FaRegEye size={22}/>
                    <FaRegEyeSlash size={22}/> */}
                    </div>
                </div>
                <div className="checkbox-field">
                    <label className="remember-me">
                        <input
                            type="checkbox"
                            name="remember"
                            className="check_box"
                        />
                        Remember Me
                    </label>
                    <a href="#" className="forgot-password">Forgot Password?</a>
                </div>

                <button type="submit" className="login-button">Login</button>
            </form>
            <SocialLogin
                textLable="Don't have an account?"
                loginLable="Sign Up"
                link="/register"
            />
        </div>

    )

}

export default LoginForm;