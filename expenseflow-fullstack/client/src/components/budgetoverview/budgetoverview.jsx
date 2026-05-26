import DateSelection from "../common/Dropdown";
import './budgetoverview.css';

const BudgetOverview = () => {
    return (
        <div className="budget-overview-conatiner">
            <div className="budget-overview-header">
                <h2>Budget Overview</h2>
                <DateSelection />
            </div>
        </div>
    )
}

export default BudgetOverview;