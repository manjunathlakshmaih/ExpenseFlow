import React, { useState } from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import { TbLockPassword } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import "./RegisterForm.css";

const RegisterForm = ({ onsubmit }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const FormData = {
            name,
            email,
            password,
            confirmPassword
        }
        onsubmit(FormData);
    }
    return (
        <div className="register-form">
            <div className="register-header">
                <h2>Create your account</h2>
                <p>Fill in The details below to get started.</p>
            </div>
            <form className="register-body" onSubmit={handleSubmit}>
                <div className="input-field">
                    <label htmlFor="name" className="login-label">Full name</label>
                    <input
                        type="text"
                        id="name" name="name"
                        className="register-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
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
                <div className="input-field">
                    <label htmlFor="confirmPassword" className="login-label">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="register-input"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="checkbox-field">
                    <label className="terms-agree">
                        <input type="checkbox" name="remember" className="check_box" />
                        I agree to the <a href="#" className="terms-link">Terms of services and Privacy policy</a>
                    </label>
                </div>
                <button type="submit" className="register-button">Register</button>
            </form>
            <SocialLogin
                textLable="Already have an account?"
                loginLable="Login"
                link="/"
            />
        </div>
    )
}

export default RegisterForm;