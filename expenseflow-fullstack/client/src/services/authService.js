import api from "./api";

export const authService = {
    // Register user
    register: async (name, email, password) => {
        try {
            const response = await api.post("/auth/register", {
                name,
                email,
                password,
                conformPassword: password,
            });
            
            // Save token to localStorage
            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            
            return response.data;
        } catch (error) {
            throw error.response?.data || { message: "Registration failed" };
        }
    },

    // Login user
    login: async (email, password) => {
        try {
            const response = await api.post("/auth/login", {
                email,
                password,
            });
            
            // Save token to localStorage
            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            
            return response.data;
        } catch (error) {
            throw error.response?.data || { message: "Login failed" };
        }
    },

    // Logout user
    logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    },

    // Get current user
    getCurrentUser: () => {
        const user = localStorage.getItem("user");
        return user ? JSON.parse(user) : null;
    },

    // Check if user is authenticated
    isAuthenticated: () => {
        return !!localStorage.getItem("token");
    },
};

// Export individual functions for use in thunks
export const registerUser = authService.register;
export const loginUser = authService.login;
