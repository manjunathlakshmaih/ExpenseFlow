import CustomLegend from "./CustomLegend";
import DonutChart from "./DonutChart";
import './DonutChartLayout.css';

const DonutChartContainer = () => {
    const data = [
        { name: "Food & Dining", value: 30, color: "#4f46e5" },
        { name: "Transportation", value: 20, color: "#3b82f6" },
        { name: "Shopping", value: 15, color: "#10b981" },
        { name: "Bills & Utilities", value: 15, color: "#f59e0b" },
        { name: "Entertainment", value: 10, color: "#ef4444" },
        { name: "Others", value: 10, color: "#9ca3af" }
    ];
    return (
        <div className="chart-container">
            <DonutChart />
            <CustomLegend data={data} />
        </div>
    )
}

export default DonutChartContainer;