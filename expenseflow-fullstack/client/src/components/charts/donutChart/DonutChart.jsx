import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Food & Dining", value: 30 },
  { name: "Transportation", value: 20 },
  { name: "Shopping", value: 15 },
  { name: "Bills", value: 15 },
  { name: "Entertainment", value: 10 },
  { name: "Others", value: 10 },
];

const COLORS = ["#4f46e5", "#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#9ca3af"];

const DonutChart = () => {
  return (
    <div className="donutchart-card">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={70}
            outerRadius={100}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonutChart;