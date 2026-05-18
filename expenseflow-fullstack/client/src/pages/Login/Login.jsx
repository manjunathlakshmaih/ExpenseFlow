import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import LoginForm from "../../components/auth/LoginForm/LoginForm";
import AuthBanner from "../../components/auth/AuthBanner/AuthBanner";
import { OrbitProgress } from "react-loading-indicators";
import "./Login.css";

const Login = () => {
    const { login, loading, error } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (formData) => {
        try {
            await login(formData.email, formData.password);
            navigate("/dashboard");
        } catch (err) {
            console.error("Login failed:", err);
        }
    }

    return (
        <div className="login-container">
            <div className="left-panel">
                <AuthBanner />
            </div>
            <div className="right-panel">
                <LoginForm onsubmit={handleSubmit} />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <div className="loading-indicator">
                {loading && <OrbitProgress color="#32cd32" size="medium" text="" textColor="" />}
                </div>
            </div>
        </div>
    )
}

export default Login;