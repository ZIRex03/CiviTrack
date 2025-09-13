import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sidebarLinks } from "@/lib/constants/sidebarLinks";
import SidebarItem from "@/components/layouts/Sidebar/SidebarItem";
import { toggleSidebar } from "@/features/ui/slice/uiSlice";

import styles from "./Sidebar.module.scss";
import LOGO from '@public/icons/logo.png';

const Sidebar = () => {
  const { sidebarOpen } = useSelector(({ ui }) => ui);
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) dispatch(toggleSidebar(false))

  return (
    <>
      {isMobile && sidebarOpen && (
        <div
          className={styles.overlay}
          onClick={() => dispatch(toggleSidebar(false))}
        />
      )}

      <aside
        className={`
          ${styles.sidebar} 
          ${isMobile ? styles.sidebarMobile : styles.sidebarDesktop}
          ${!isMobile && !sidebarOpen ? styles.sidebarDesktopClose : ""}
          ${isMobile && sidebarOpen ? styles.sidebarMobileOpen : ""}
        `}
      >

        
        <nav className={styles.sidebarNav}>
          {isMobile && 
            <img src={LOGO} alt="CiviTrack" className={styles.logo}/>
          }
          <ul className={styles.sidebarItems}>
            {sidebarLinks.map((link, i) => (
              <SidebarItem key={i} sidebarLinks={link} Icon={link.icon} />
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
