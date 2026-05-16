import LoginForm from "../../components/auth/LoginForm/LoginForm";
import AuthBanner from "../../components/auth/AuthBanner/AuthBanner";
import "./Login.css";

const Login = () => {
    const handleSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <div className="login-container">
            <div className="left-panel">
                <AuthBanner />
            </div>
            <div className="right-panel">
                <LoginForm onsubmit={handleSubmit} />
            </div>
        </div>
    )
}

export default Login;