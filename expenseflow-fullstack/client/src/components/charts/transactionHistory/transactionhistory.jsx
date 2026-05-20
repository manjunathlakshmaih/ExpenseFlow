import './transactionhistory.css';
import UnorderedList from '../../common/list';

const TransactionHistory = () => {
    const transactionsData = [
        { id: 1, description: "Grocery Shopping", amount: "$150.00", date: "2024-06-01" },
        { id: 2, description: "Electricity Bill", amount: "$75.00", date: "2024-06-03" },
        { id: 3, description: "Dinner at Restaurant", amount: "$60.00", date: "2024-06-05" },
        { id: 4, description: "Online Subscription", amount: "$20.00", date: "2024-06-07" },
        { id: 5, description: "Gas Refill", amount: "$40.00", date: "2024-06-10" },
    ];
    return (
        <div className="transaction-history-container">
            <h3>Recent Transactions</h3>
            <div className="transaction-list">
                <UnorderedList items={transactionsData} />
            </div>
        </div>
    )
}

export default TransactionHistory;