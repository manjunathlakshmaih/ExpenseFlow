import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./slices/LoginSlice";
import ExpenseSlice from "./slices/ExpenseSlice";

export const store = configureStore({
    reducer: {
        auth: LoginSlice,
        expenses: ExpenseSlice,
    },
});

export default store;
