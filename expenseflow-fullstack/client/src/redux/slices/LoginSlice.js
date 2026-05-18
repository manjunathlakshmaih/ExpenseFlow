import { createSlice } from "@reduxjs/toolkit";
import { authService } from "../../services/authService";

const initialState = {
    user: authService.getCurrentUser(),
    token: localStorage.getItem("token"),
    isAuthenticated: authService.isAuthenticated(),
    loading: false,
    error: null,
};

const LoginSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // Register
        registerStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        registerSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.error = null;
        },
        registerFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // Login
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.error = null;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // Logout
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.loading = false;
            state.error = null;
        },

        clearError: (state) => {
            state.error = null;
        },
    },
});

export const {
    registerStart,
    registerSuccess,
    registerFailure,
    loginStart,
    loginSuccess,
    loginFailure,
    logout,
    clearError,
} = LoginSlice.actions;

export default LoginSlice.reducer;
