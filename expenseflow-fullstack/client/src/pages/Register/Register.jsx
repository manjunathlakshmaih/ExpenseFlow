import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import RegisterForm from "../../components/auth/RegisterForm/RegisterForm";
import AuthBanner from "../../components/auth/AuthBanner/AuthBanner";
import { OrbitProgress } from "react-loading-indicators";
import "./Register.css";

const Register = () => {
    const { register, loading, error } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (formData) => {
        try {
            await register(formData.name, formData.email, formData.password, formData.confirmPassword);
            navigate("/dashboard");
        } catch (err) {
            console.error("Registration failed:", err);
        }
    }

    return (
        <div className="login-container">
            <div className="left-panel">
                <AuthBanner />
            </div>
            <div className="right-panel">
                <RegisterForm onsubmit={handleSubmit} />
                {error && <p style={{ color: "red" }}>{error}</p>}
                {loading && <OrbitProgress color="#32cd32" size="medium" text="" textColor="" />}
            </div>
        </div>
    )
}

export default Register;