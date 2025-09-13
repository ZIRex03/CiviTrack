import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { useSelector } from "react-redux";

function calculateAge(birthDate) {
  return new Date().getFullYear() - new Date(birthDate.split(".").reverse().join("-")).getFullYear();
}

export default function AgeBarChart() {
  const {citizens} = useSelector(({citizens}) => citizens);

  const groups = {
    "18-30": 0,
    "31-45": 0,
    "46-60": 0,
    "60+": 0,
  };

  citizens.forEach((c) => {
    const age = calculateAge(c.birthDate);
    if (age >= 18 && age <= 30) groups["18-30"]++;
    else if (age <= 45) groups["31-45"]++;
    else if (age <= 60) groups["46-60"]++;
    else groups["60+"]++;
  });

  const data = Object.keys(groups).map((k) => ({ group: k, count: groups[k] }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="group" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#3b82f6" />
      </BarChart>
    </ResponsiveContainer>
  );
}
