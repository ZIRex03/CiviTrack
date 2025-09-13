import Sidebar from '@/components/layouts/Sidebar/Sidebar'
import React, { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import styles from './AsideLayout.module.scss'


const AsideLayout = () => {

  const location = useLocation()
  const contentRef = useRef(null)

  useEffect(() => {
    if(contentRef.current){
      contentRef.current.scrollTop = 0
    }
  }, [location.pathname])

  return (
    <section className={styles.mainBox}>
        <Sidebar/>
        <section
          className={styles.content}
          ref={contentRef}
        >
          <Outlet/>
        </section>
    </section>
  )
}

export default AsideLayout