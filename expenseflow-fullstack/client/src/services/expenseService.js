import api from "./api";

// Add new expense
export const addExpense = async (expenseData) => {
    const response = await api.post("/expenses/add", expenseData);
    return response.data;
};

// Get all expenses
export const getExpenses = async () => {
    const response = await api.get("/expenses");
    return response.data;
};

// Get expense by ID
export const getExpenseById = async (id) => {
    const response = await api.get(`/expenses/${id}`);
    return response.data;
};

// Update expense
export const updateExpense = async (id, expenseData) => {
    const response = await api.put(`/expenses/${id}`, expenseData);
    return response.data;
};

// Delete expense
export const deleteExpense = async (id) => {
    const response = await api.delete(`/expenses/${id}`);
    return response.data;
};
