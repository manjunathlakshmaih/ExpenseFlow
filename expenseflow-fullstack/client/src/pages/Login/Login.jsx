import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../redux/slices/LoginSlice";
import LoginForm from "../../components/auth/LoginForm/LoginForm";
import AuthBanner from "../../components/auth/AuthBanner/AuthBanner";
import { OrbitProgress } from "react-loading-indicators";
import "./Login.css";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, isAuthenticated } = useSelector(state => state.auth);

    const handleSubmit = async (formData) => {
        try {
            const result = await dispatch(loginThunk({ 
                email: formData.email, 
                password: formData.password 
            })).unwrap();
            
            if (result) {
                navigate("/dashboard");
            }
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