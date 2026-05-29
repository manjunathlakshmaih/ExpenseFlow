import React from "react";
import './addExpensePopup.css';

const AddExpensePopup = ({ onClose }) => {

    const HandleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="expense-popup-overlay">
            <form className="expense-container" onSubmit={HandleSubmit}>
                <h2>Add New Expense</h2>
                <div className="expense-input-container">
                    <div className="expense-input-fld">
                        <label htmlFor="description">Description</label>
                        <input id="description" name="description" type="text" placeholder="Expense Name" />
                    </div>
                    <div className="expense-input-fld">
                        <label htmlFor="description">Categary</label>
                        <input id="Categary" name="Categary" type="text" placeholder="Categary" />
                    </div>
                    <div className="expense-input-fld">
                        <label htmlFor="description">Amount</label>
                        <input id="Amount" name="Amount" type="text" placeholder="Amount" />
                    </div>
                    <div className="expense-input-fld">
                        <label htmlFor="description">Date</label>
                        <input id="Date" name="Date" type="text" placeholder="Date" />
                    </div>
                </div>
                <div className="expense-btn-fld">
                    <button className="expense-button">Add Expense</button>
                    <button className="close-popup-button" onClick={onClose}>Close</button>
                </div>
            </form>
        </div>
    )
}

export default AddExpensePopup;
