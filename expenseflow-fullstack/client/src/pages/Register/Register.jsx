import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerThunk } from "../../redux/slices/LoginSlice";
import RegisterForm from "../../components/auth/RegisterForm/RegisterForm";
import AuthBanner from "../../components/auth/AuthBanner/AuthBanner";
import { OrbitProgress } from "react-loading-indicators";
import "./Register.css";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector(state => state.auth);

    const handleSubmit = async (formData) => {
        try {
            const result = await dispatch(registerThunk({
                name: formData.name,
                email: formData.email,
                password: formData.password,
                conformPassword: formData.confirmPassword
            })).unwrap();
            
            if (result) {
                navigate("/dashboard");
            }
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