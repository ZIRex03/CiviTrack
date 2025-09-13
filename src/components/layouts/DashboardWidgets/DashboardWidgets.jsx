import React from "react";
import styles from "./DashboardWidgets.module.scss";
import { useSelector } from "react-redux";
import {
  FaUsers,
  FaVenusMars,
  FaBirthdayCake,
  FaMapMarkerAlt,
} from "react-icons/fa";

const DashboardWidgets = () => {
  const { citizens } = useSelector(({ citizens }) => citizens);

  const maleCitizen = citizens.filter((citizen) => citizen.gender === "male");
  const malePercent = Math.round((maleCitizen.length / citizens.length) * 100);
  const femalePercent = 100 - malePercent;

  const getAge = (birthDate) => {
    if (!birthDate) return 0;
    const [day, month, year] = birthDate.split(".");
    const birth = new Date(year, month - 1, day);
    const diff = Date.now() - birth.getTime();
    return new Date(diff).getUTCFullYear() - 1970;
  };

  const ages = citizens.map((c) => getAge(c.birthDate));
  const avgAge =
    ages.length > 0
      ? Math.round(ages.reduce((a, b) => a + b, 0) / ages.length)
      : 0;

  const regionCounts = citizens.reduce((acc, c) => {
    acc[c.region] = (acc[c.region] || 0) + 1;
    return acc;
  }, {});

  const topRegions = Object.entries(regionCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  return (
    <div className={styles.widgetsBox}>
      <div className={`${styles.widget} ${styles.blue}`}>
        <div className={styles.header}>
          <FaUsers className={styles.icon} />
          <span className={styles.title}>Общее кол-во</span>
        </div>
        <span className={styles.text}>{citizens.length}</span>
        <span className={styles.subtext}>Всего граждан в базе</span>
      </div>

      <div className={`${styles.widget} ${styles.green}`}>
        <div className={styles.header}>
          <FaVenusMars className={styles.icon} />
          <span className={styles.title}>Мужчины / Женщины</span>
        </div>
        <span className={styles.text}>
          {malePercent}% / {femalePercent}%
        </span>
        <span className={styles.subtext}>
          {maleCitizen.length} м / {citizens.length - maleCitizen.length} ж
        </span>
      </div>

      <div className={`${styles.widget} ${styles.pink}`}>
        <div className={styles.header}>
          <FaBirthdayCake className={styles.icon} />
          <span className={styles.title}>Средний возраст</span>
        </div>
        <span className={styles.text}>{avgAge} лет</span>
        <span className={styles.subtext}>Возраст в среднем по базе</span>
      </div>

      <div className={`${styles.widget} ${styles.purple}`}>
        <div className={styles.header}>
          <FaMapMarkerAlt className={styles.icon} />
          <span className={styles.title}>ТОП-3 региона</span>
        </div>
        <ul className={styles.regionList}>
          {topRegions.map(([region, count]) => (
            <li key={region}>
              <span className={styles.regionName}>{region}</span>
              <span className={styles.regionCount}>{count}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardWidgets;
