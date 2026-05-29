import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addExpense, getExpenses, getExpenseById, updateExpense, deleteExpense } from "../../services/expenseService";

// Thunks - Connect service to Redux
export const addExpenseThunk = createAsyncThunk(
    "expenses/addExpense",
    async (expenseData, { rejectWithValue }) => {
        try {
            const result = await addExpense(expenseData);
            return result.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getExpensesThunk = createAsyncThunk(
    "expenses/getExpenses",
    async (_, { rejectWithValue }) => {
        try {
            const result = await getExpenses();
            return result;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getExpenseByIdThunk = createAsyncThunk(
    "expenses/getExpenseById",
    async (id, { rejectWithValue }) => {
        try {
            const result = await getExpenseById(id);
            return result;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const updateExpenseThunk = createAsyncThunk(
    "expenses/updateExpense",
    async ({ id, expenseData }, { rejectWithValue }) => {
        try {
            const result = await updateExpense(id, expenseData);
            return result.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteExpenseThunk = createAsyncThunk(
    "expenses/deleteExpense",
    async (id, { rejectWithValue }) => {
        try {
            await deleteExpense(id);
            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    expenses: [],
    loading: false,
    error: null,
}

const ExpenseSlice = createSlice({
    name: "expenses",
    initialState: initialState,  
    reducers: {},
    extraReducers: (builder) => {
        // Add Expense
        builder
            .addCase(addExpenseThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addExpenseThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.expenses.push(action.payload);
                state.error = null;
            })
            .addCase(addExpenseThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Get Expenses
            .addCase(getExpensesThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getExpensesThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.expenses = action.payload;
                state.error = null;
            })
            .addCase(getExpensesThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Update Expense
            .addCase(updateExpenseThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateExpenseThunk.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.expenses.findIndex(exp => exp._id === action.payload._id);
                if (index !== -1) {
                    state.expenses[index] = action.payload;
                }
                state.error = null;
            })
            .addCase(updateExpenseThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Delete Expense
            .addCase(deleteExpenseThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteExpenseThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.expenses = state.expenses.filter(exp => exp._id !== action.payload);
                state.error = null;
            })
            .addCase(deleteExpenseThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
}); 

export default ExpenseSlice.reducer;