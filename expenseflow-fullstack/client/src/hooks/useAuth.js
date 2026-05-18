import { useState } from "react";
import { authService } from "../services/authService";


export const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(authService.getCurrentUser());

    const register = async (name, email, password) => {
        setLoading(true);
        setError(null);
        try {
            const data = await authService.register(name, email, password);
            setUser(data);
            return data;
        } catch (err) {
            const errorMessage = err.message || "Registration failed";
            setError(errorMessage);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const login = async (email, password) => {
        setLoading(true);
        setError(null);
        try {
            const data = await authService.login(email, password);
            setUser(data);
            return data;
        } catch (err) {
            const errorMessage = err.message || "Login failed";
            setError(errorMessage);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        authService.logout();
        setUser(null);
        setError(null);
    };

    return {
        user,
        loading,
        error,
        register,
        login,
        logout,
        isAuthenticated: authService.isAuthenticated(),
    };
};
