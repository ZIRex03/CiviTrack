import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useSelector } from "react-redux";

const COLORS = ["#3b82f6", "#ef4444"];

export default function GenderPieChart() {
  const {citizens} = useSelector(({citizens}) => citizens);

  const maleCount = citizens.filter((c) => c.gender === "male").length;
  const femaleCount = citizens.filter((c) => c.gender === "female").length;

  const data = [
    { name: "Мужчины", value: maleCount },
    { name: "Женщины", value: femaleCount },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
