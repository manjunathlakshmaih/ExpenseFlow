import './transactionhistory.css';
import UnorderedList from '../../common/list';

const TransactionHistory = ({ Icon }) => {

    // const categoryIcons = {
    //     entertainment: NetflixIcon,
    //     "food & dining": GroceryIcon,
    //     income: SalaryIcon,
    //     transportation: CarIcon,
    //     "bills & utilities": ElectricityIcon,
    // };

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
        }
    ];
    return (
        <div className="transaction-history-container">
            <h3>Recent Transactions</h3>
            {transactions.map((item, index) => (
                <div className="transaction-list" key={index}>
                    {/* <div className='icon'>
                        {Icon}
                    </div> */}
                    <div className='details'>
                        <h4>{item.title}</h4>
                        <p>{item.category}</p>
                    </div>
                    <div className="right">
                        <span className={item.amount > 0 ? "positive" : "negative"}>
                            {item.amount > 0 ? `+${item.amount}` : item.amount}
                        </span>
                        <p>{item.date}</p>
                    </div>
                </div>
            ))}
            <p>View All Transactions &rarr;</p>
        </div>
    )
}

export default TransactionHistory;