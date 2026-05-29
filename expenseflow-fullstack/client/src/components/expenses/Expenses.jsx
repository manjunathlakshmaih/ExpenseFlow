import { useState } from "react";
import ExpenseRow from "./ExpenseRow";
import './Expenses.css';

const ExpenseTable = () => {
    const [data, setData] = useState([
        {
            id: 1,
            description: "Dinner at Restaurant",
            category: "Food & Dining",
            amount: "-$45.80",
            date: "May 24, 2024"
        },
        {
            id: 2,
            description: "Online Shopping",
            category: "Shopping",
            amount: "-$120.00",
            date: "May 24, 2024"
        },
        {
            id: 3,
            description: "Online Shopping",
            category: "Shopping",
            amount: "-$120.00",
            date: "May 24, 2024"
        },
        {
            id: 4,
            description: "Online Shopping",
            category: "Shopping",
            amount: "-$120.00",
            date: "May 24, 2024"
        },
        {
            id: 5,
            description: "Online Shopping",
            category: "Shopping",
            amount: "-$120.00",
            date: "May 24, 2024"
        },
        {
            id: 6,
            description: "Online Shopping",
            category: "Shopping",
            amount: "-$120.00",
            date: "May 24, 2024"
        }
    ]);
    const [editId, setEditId] = useState(null);
    const [editData, setEditData] = useState(false);

    const handleEdit = (item) => {
        setEditId(item.id);
        setEditData(item);
    }

    const handleChange = (e) => {
        setEditData({
            ...editData,
            [e.target.name]: e.target.value,
        })
    }

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    }


    const handleSave = () => {
        const updated = data.map((item) =>
            item.id === editId ? editData : item
        );
        setData(updated);
        setEditId(null);
    };


    return (
        <div className="recent-expenses">
            <div className="recent-expenses-header">
                <h3>Recent Expenses</h3>
                {data.length > 5 && <button className="view-all-btn">View All</button>}
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Categary</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.slice(0, 5).map((item) => (
                        <ExpenseRow
                            key={item.id}
                            item={item}
                            editId={editId}
                            editData={editData}
                            onEdit={handleEdit}
                            onChange={handleChange}
                            onDelete={handleDelete}
                            onSave={handleSave}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ExpenseTable;