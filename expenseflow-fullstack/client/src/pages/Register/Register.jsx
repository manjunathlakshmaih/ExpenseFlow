import RegisterForm from "../../components/auth/RegisterForm/RegisterForm";
import AuthBanner from "../../components/auth/AuthBanner/AuthBanner";
import "./Register.css";

const Register = () => {
    const handleSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div className="login-container">
            <div className="left-panel">
                <AuthBanner />
            </div>
            <div className="right-panel">
                <RegisterForm onsubmit={handleSubmit} />
            </div>
        </div>
    )
}

export default Register;