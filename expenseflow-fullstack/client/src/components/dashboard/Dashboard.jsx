import { useState } from "react";
import NavHeader from "../layout/Header/Header";
import DashboardHeader from "../layout/DashboardHeader/DashboardHeader";
import StatCard from "../layout/Statcard/Statcard";
import Totalexpense from "../../assets/icons/Totalexpense.png";
import Totalbalance from "../../assets/icons/Totalbalance.png";
import Totalincome from "../../assets/icons/Totalincome.png";
import Monthlybudget from "../../assets/icons/Monthlyexpense.png";
import ExpenseChart from "../charts/lineChart/linecharts";
import DonutChartContainer from "../charts/donutChart/DonutChartLayout";
import TransactionHistory from "../charts/transactionHistory/transactionhistory";
import './Dashboard.css';

const DashboardLayout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    }


    const dashboardData = [
        {
            title: "Total Balance",
            amount: "$8,542.50",
            icon: Totalbalance,
            change: "↑ 12.5% from last month",
            changeType: "positive",
        },
        {
            title: "Total Expenses",
            amount: "$2,342.80",
            icon: Totalexpense,
            change: "↓ 8.2% from last month",
            changeType: "negative",
        },
        {
            title: "Total Income",
            amount: "$5,890.30",
            icon: Totalincome,
            change: "↑ 15.3% from last month",
            changeType: "positive",
        },
        {
            title: "Monthly Budget",
            amount: "$3,000.00",
            icon: Monthlybudget,
            extra: <div className="progress">78% used</div>,
        },
    ];


    return (
        <div className="dashboard-layout">
            <div className="header-search-fld">
                <NavHeader isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} onMenuClose={handleMenuClose} />
            </div>
            <div className={`dashboard-header ${isMenuOpen ? 'shifted' : ''}`}>
                <DashboardHeader isMenuOpen={isMenuOpen} />
                <div className="dashboard-stats">
                    {dashboardData.map((data, index) => (
                        <StatCard isMenuOpen={isMenuOpen} key={index} {...data} />
                    ))}
                </div>
                <div className="dashboard-charts">
                    <ExpenseChart />
                    <DonutChartContainer />
                    <TransactionHistory />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;