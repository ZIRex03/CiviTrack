import React from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

import styles from "./Header.module.scss";
import LOGO from "@public/icons/logo.png";
import AVATAR from '@public/user-avatars/main_avatar.png'
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/features/ui/slice/uiSlice";

const Header = () => {

  const dispatch = useDispatch()
  const {sidebarOpen} = useSelector(({ui}) => ui)

  const handleSidebar = () => {
    dispatch(toggleSidebar(!sidebarOpen))
  }

  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <img className={styles.logo} src={LOGO} alt="CiviTrack" />
        <button
            className={styles.menuBtn}
            aria-label="Открыть меню"
            onClick={handleSidebar}
        >
          <RxHamburgerMenu/>
        </button>
      </div>

      <div className={styles.userBox}>
        <button
            className={styles.bellBtn}
            aria-label="Уведомления"
            >
            <IoNotificationsOutline/>
        </button>

        <div className={styles.profileBox}>
            <div className={styles.avatarBox}>
                <img src={AVATAR} alt="AVATAR" />
            </div>
            <IoIosArrowDown/>
        </div>
      </div>
    </header>
  );
};

export default Header;
