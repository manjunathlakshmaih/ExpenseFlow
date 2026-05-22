import './transactionhistory.css';
import { useEffect, useState } from 'react';
import NetflixIcon from '../../../assets/icons/netflix.svg';
import GroceryIcon from '../../../assets/icons/GroceryIcon.svg';
import SalaryIcon from '../../../assets/icons/SalaryIcon.svg';
import CarIcon from '../../../assets/icons/CarIcon.svg';
import ElectricityIcon from '../../../assets/icons/ElectricityIcon.svg';

const TransactionHistory = ({ Icon }) => {
    const [isFullHistoryRequired, setIsFullHistoryRequired] = useState(false);
    const categoryIcons = {
        entertainment: NetflixIcon,
        "food & dining": GroceryIcon,
        income: SalaryIcon,
        transportation: CarIcon,
        "bills & utilities": ElectricityIcon,
    };

    const transactions = [
        {
            title: "Netflix Subscription",
            category: "entertainment",
            amount: -15.99,
            date: "May 24",
        },
        {
            title: "Grocery Shopping",
            category: "food & dining",
            amount: -89.50,
            date: "May 24",
        },
        {
            title: "Salary Deposit",
            category: "income",
            amount: 2500.00,
            date: "May 23",
        },
        {
            title: "Uber Ride",
            category: "transportation",
            amount: 2500.00,
            date: "May 23",
        },
        {
            title: "Salary Deposit",
            category: "income",
            amount: 2500.00,
            date: "May 23",
        },
        {
            title: "Salary Deposit",
            category: "income",
            amount: 2500.00,
            date: "May 23",
        },
        {
            title: "Salary Deposit",
            category: "income",
            amount: 2500.00,
            date: "May 23",
        }
    ];
    useEffect(() => {
        if (transactions.length > 6) {
            setIsFullHistoryRequired(true);
        } else {
            setIsFullHistoryRequired(false);
        }
    }, [transactions]);

    return (
        <div className="transaction-history-container">
            <div className="transaction-history-header">
                <h3>Recent Transactions</h3>
            </div>
            {transactions.slice(0, 6).map((item, index) => (
                <div className="transaction-list" key={index}>

                    <div className='details'>
                        <div className='icon'>
                            {categoryIcons[item.category] ? (
                                <img src={categoryIcons[item.category]} alt={item.category} />
                            ) : (
                                <span className="default-icon">{item.category.charAt(0).toUpperCase()}</span>
                            )}
                        </div>
                        <div className='text'>
                            <h4>{item.title}</h4>
                            <p>{item.category}</p>
                        </div>
                    </div>
                    <div className="right">
                        <span className={item.amount > 0 ? "positive" : "negative"}>
                            {item.amount > 0 ? `+${item.amount}` : item.amount}
                        </span>
                        <p>{item.date}</p>
                    </div>
                </div>
            ))}
            {isFullHistoryRequired && <a href='#' className='full-transaction'>View All Transactions &rarr;</a>}
        </div>
    )
}

export default TransactionHistory;