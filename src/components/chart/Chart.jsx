import React from "react";
import "./chart.scss";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = ({ data, title, grid, dataKey }) => {
  return (
    <div className="chart">
      <h3 className="chart__title">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          {/* <YAxis /> */}
          <Line dataKey={dataKey} type="monotone" stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5 " />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
