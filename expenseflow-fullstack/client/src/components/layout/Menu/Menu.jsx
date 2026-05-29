import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/slices/LoginSlice";
import UnorderedList from "../../common/list";
import { FiLogOut } from "react-icons/fi";
import { IoMdHome } from "react-icons/io";
import { GiExpense } from "react-icons/gi";
import { TbFileAnalytics } from "react-icons/tb";
import { MdAvTimer } from "react-icons/md";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { GiStairsGoal } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import logo from "../../../assets/images/expns_logo.png";
import './Menu.css';

const DashboardMenu = ({ onClose }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const transactions = [
        { id: 1, label: 'Dashboard', icon: <IoMdHome size={25} /> },
        { id: 2, label: 'Expenses', icon: <GiExpense size={25} /> },
        { id: 3, label: 'Analytics', icon: <TbFileAnalytics size={25} /> },
        { id: 4, label: 'Budgets', icon: <MdAvTimer size={25} /> },
        { id: 5, label: 'Categeries', icon: <RiDashboardHorizontalLine size={25} /> },
        { id: 6, label: 'Transactions', icon: <GrTransaction size={25} /> },
        { id: 7, label: 'Calender', icon: <SlCalender size={25} /> },
        { id: 8, label: 'Goals', icon: <GiStairsGoal size={25} /> },
        { id: 9, label: 'Settings', icon: <IoSettingsOutline size={25} /> },
    ];

    const handleMenuItemClick = (item) => {
        console.log('Clicked:', item);
        if (onClose) onClose();
    }

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    }

    return (
        <div className="menu-container">
            <div className="menu-header">
                <img className="menu-logo" src={logo} />
                <span className="dashboard_title">ExpenseTracker</span>
            </div>
            <div className="menu-list">
                <UnorderedList
                    items={transactions}
                    className="menu-items"
                    onClick={handleMenuItemClick}
                />
            </div>
            <div className="logout-button">
                <button onClick={handleLogout}>Logout</button>
                <FiLogOut size={35} className="logout-icon" />
            </div>
        </div>
    )
}

export default DashboardMenu;