import AsideLayout from '@/components/layouts/AsideLayout/AsideLayout'
import CitizenCard from '@/pages/CitizenCard/CitizenCard'
import Citizens from '@/pages/Citizens/Citizens'
import Dashboard from '@/pages/Dashboard/Dashboard'
import { ROUTES } from '@/routes/routes'
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Routes>
        <Route element={<AsideLayout/>}>
        <Route path='/' element={<Navigate to={ROUTES.DASHBOARD} replace/>}/>
            <Route path={ROUTES.DASHBOARD} element={<Dashboard/>}/>
            <Route path={ROUTES.CITIZIENS} element={<Citizens/>}/>
            <Route path={ROUTES.CITIZIENS_CARD} element={<CitizenCard/>}/>
        </Route>
        <Route path='*' element={<Navigate to={ROUTES.DASHBOARD} replace/>}/>
    </Routes>
  )
}

export default AppRoutes