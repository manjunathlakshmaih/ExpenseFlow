import { useState } from 'react';
import "./index.css";

const DateSelection = ({ }) => {
  const [value, onChange] = useState(new Date());

  return (
    <select className='date-selection'>
      <option value="lastMonth">This Month</option>
      <option value="last7days">Last 1 Month</option>
      <option value="last30days">Last 3 Month</option>
      <option value="thisMonth">Last 1 Year</option>
    </select>
  );
}

export default DateSelection;