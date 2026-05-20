import React from "react";
import { useSelector } from "react-redux";
import { GrAdd } from "react-icons/gr";
import './DashboardHeader.css';

const DashboardHeader = ({onClick, userName, isMenuOpen}) => {
    const user = useSelector(state => state.auth.user);

    return (
        <div className="dashboard-header-container">
            <div className="dashborad-left">
                <h1>Dashboard</h1>
                <p>Welcome Back, {`${user?.name || 'User'}!`} here's what's happening with your finances.</p>
            </div>
            <div className="dashboard-right">
                <button className="add-expense-button" onClick={onClick}><span>{<GrAdd size={20}/>}</span> Add Expense</button>
            </div>
        </div>
    )
}

export default DashboardHeader;