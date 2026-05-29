import './index.css';
const BudgetItem = ({ title, spent, total }) => {
    const percentage = Math.round((spent / total) * 100);

    return (
        <div className="budget-item-container">
            {/* Title + Amount */}
            <div className = "Budget-header">
                <span>{title}</span>
                <span>${spent} / ${total}</span>
            </div>

            {/* Progress Bar */}
            <div className="progress-bar">
                <div
                    style={{
                        width: "80%",
                        height: "8px",
                        backgroundColor: "#ddd",
                        borderRadius: "5px",
                        marginTop: "5px",
                    }}
                >
                    <div
                        style={{
                            width: `${percentage}%`,
                            height: "100%",
                            backgroundColor: "#5A5AE6",
                            borderRadius: "5px",
                        }}
                    ></div>
                </div>
                <div className = "budget-percentage">
                    {percentage}%
                </div>
            </div>
        </div>
    );
};

export default BudgetItem;