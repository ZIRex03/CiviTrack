import React from "react";
import { Link, useLocation } from "react-router-dom";

import styles from './SidebarItem.module.scss'
import { useSelector } from "react-redux";

const SidebarItem = ({ sidebarLinks, Icon }) => {

    const {sidebarOpen} = useSelector(({ui}) => ui)

    const location = useLocation();
    const isActive = location.pathname.includes(sidebarLinks.path)

  return (
    <Link to={sidebarLinks.path}>
      <div className={`${styles.item} ${isActive ? styles.active : ""}`}>
        <Icon className={styles.icon} />
        <span
            className={`${sidebarOpen ? styles.title : styles.titleClose}`}
        >
            {sidebarLinks.title}
        </span>
      </div>
    </Link>
  );
};

export default SidebarItem;
