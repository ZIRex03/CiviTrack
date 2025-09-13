import Sidebar from '@/components/layouts/Sidebar/Sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'

import styles from './AsideLayout.module.scss'


const AsideLayout = () => {

  return (
    <section className={styles.mainBox}>
        <Sidebar/>
        <section
          className={styles.content}>
          <Outlet/>
        </section>
    </section>
  )
}

export default AsideLayout