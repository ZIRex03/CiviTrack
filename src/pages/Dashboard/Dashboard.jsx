import React from "react";

import styles from "./Dashboard.module.scss";
import DashboardWidgets from "@/components/layouts/DashboardWidgets/DashboardWidgets";
import GenderPieChart from "@/components/charts/GenderPieChart/GenderPieChart";
import AgeBarChart from "@/components/charts/AgeBarChart/AgeBarChart";
import CitizensLineChart from "@/components/charts/CitizenLineChart/CitizenLineChart";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <DashboardWidgets />

      <div className={styles.charts}>
        <div className={styles.chartCard}>
          <h3>Распределение по полу</h3>
          <GenderPieChart />
        </div>

        <div className={styles.chartCard}>
          <h3>Возрастные группы</h3>
          <AgeBarChart />
        </div>
      </div>

      <div className={styles.chartCard}>
        <h3>Рост количества по годам</h3>
        <CitizensLineChart />
      </div>
    </div>
  );
};

export default Dashboard;
