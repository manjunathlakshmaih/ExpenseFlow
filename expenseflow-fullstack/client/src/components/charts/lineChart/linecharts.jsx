import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from "recharts";
import DateSelection from "../../common/Dropdown";
import './linecharts.css';

const data = [
    { day: "1 May", amount: 200 },
    { day: "6 May", amount: 900 },
    { day: "11 May", amount: 1400 },
    { day: "16 May", amount: 800 },
    { day: "21 May", amount: 1200 },
    { day: "26 May", amount: 1400 },
    { day: "31 May", amount: 1700 },
];

const ExpenseChart = () => {
    return (
        <div className="line-card">
            <div className="linecard-header">
                <h3>Expense Overview</h3>
                <DateSelection />
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid stroke="#eee" vertical={false} />
                    {/* X-Axis with styling */}
                    <XAxis
                        dataKey="day"
                        stroke="#666"
                        strokeWidth={1}
                        axisLine={{ stroke: '#333', strokeWidth: 2 }}
                        tick={{ fill: '#666', fontSize: 12 }}
                    />
                    <YAxis
                        stroke="#666"
                        strokeWidth={1}
                        axisLine={{ stroke: '#333', strokeWidth: 2 }}
                        tick={{ fill: '#666', fontSize: 12 }}
                    />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="amount"
                        stroke="#4f46e5"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ExpenseChart;