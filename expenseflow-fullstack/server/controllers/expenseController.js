const Expense = require("../models/Expense");

exports.addExpense = async (req, res) => {
    try {
        const { title, amount, category, date } = req.body;

        if (!title || !amount) {
            return res.status(400).json({ message: "Title and amount are required" });
        }

        const newExpense = new Expense({
            title,
            amount,
            category,
            date
        });

        await newExpense.save();

        res.status(201).json({ message: "Expense added successfully", data: newExpense });
    } catch (error) {
        console.error("Error adding expense:", error.message);
        res.status(500).json({ message: "Server error while adding expense", error: error.message });
    }
};