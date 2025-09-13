import React from "react";
import { Link, useLocation } from "react-router-dom";

import styles from './SidebarItem.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/features/ui/slice/uiSlice";

const SidebarItem = ({ sidebarLinks, Icon, isMobile }) => {

    const {sidebarOpen} = useSelector(({ui}) => ui)
    const dispatch = useDispatch()

    const location = useLocation();
    const isActive = location.pathname.includes(sidebarLinks.path)

    const handleMobileClick = () => {
      if(isMobile) dispatch(toggleSidebar(false))
    }

  return (
    <Link to={sidebarLinks.path} onClick={handleMobileClick}>
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
