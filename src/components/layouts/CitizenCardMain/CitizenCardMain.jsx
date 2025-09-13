import React from 'react'

import styles from './CitizenCardMain.module.scss'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/routes/routes'
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdOutlineMail, MdOutlinePhoneAndroid } from "react-icons/md";
import { FaStreetView } from 'react-icons/fa';

const CitizenCardMain = ({citizen}) => {

    console.log(citizen)
  return (
    <div className={styles.wrapper}>
        <Link
            to={ROUTES.CITIZIENS}
            className={styles.linkBack}
        >
            <IoIosArrowRoundBack/>
            <span>Вернуться к списку</span>
        </Link>

        <div className={styles.userInfo}>
            <div className={styles.userAvatar}>
                <img src={citizen.avatar} alt={citizen.name} />
            </div>

            <span
                className={styles.userFullName}
            >
                {citizen.name}
            </span>

            <span
                className={styles.userProfession}
            >
                {citizen.profession}
            </span>
        </div>

        <div className={styles.userDetails}>
            <div className={styles.detailsItem}>
                <div className={styles.desc}>
                    <MdOutlinePhoneAndroid/>
                    <span className={styles.desc}>Телефон</span>
                </div>
                <span>+7 {citizen.contacts.phone}</span>
            </div>

            <div className={styles.detailsItem}>
                <div className={styles.desc}>
                    <MdOutlineMail/>
                    <span className={styles.desc}>Почта</span>
                </div>
                <span>{citizen.contacts.email}</span>
            </div>

            <div className={styles.detailsItem}>
                <div className={styles.desc}>
                    <FaStreetView/>
                    <span className={styles.desc}>Город</span>
                </div>
                <span>{citizen.region}</span>
            </div>
        </div>
    </div>
  )
}

export default CitizenCardMain