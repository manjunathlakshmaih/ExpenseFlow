const CustomLegend = ({ data }) => {
  return (
    <div className="legend">
      {data.map((item, index) => (
        <div className="legend-item" key={index}>
          <span
            className="dot"
            style={{ backgroundColor: item.color }}
          ></span>

          <span className="label">{item.name}</span>

          <span className="value">{item.value}%</span>
        </div>
      ))}
    </div>
  );
};

export default CustomLegend;