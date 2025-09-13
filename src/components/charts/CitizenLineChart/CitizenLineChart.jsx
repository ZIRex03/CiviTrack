import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { useSelector } from "react-redux";

export default function CitizensLineChart() {
  const {citizens} = useSelector(({citizens}) => citizens);

  const stats = {};
  citizens.forEach((c) => {
    const year = new Date(c.birthDate.split(".").reverse().join("-")).getFullYear();
    stats[year] = (stats[year] || 0) + 1;
  });

  const data = Object.keys(stats)
    .sort()
    .map((year) => ({ year, count: stats[year] }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="count" stroke="#10b981" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
