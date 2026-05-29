import DateSelection from "../common/Dropdown";
import BudgetItem from "../common/BudegtItem";
import './budgetoverview.css';

const BudgetOverview = () => {
    return (
        <div className="budget-overview-conatiner">
            <div className="budget-overview-header">
                <h2>Budget Overview</h2>
                <DateSelection />
            </div>
            <div className="budget-overview-content">
                <BudgetItem title="Food & Dining" spent={450} total={600} />
                <BudgetItem title="Transportation" spent={300} total={500} />
                <BudgetItem title="Shopping" spent={250} total={400} />

            </div>
        </div>
    )
}

export default BudgetOverview;