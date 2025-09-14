import AsideLayout from '@/components/layouts/AsideLayout/AsideLayout'
import Analytics from '@/pages/Analytics/Analytics'
import CitizenCard from '@/pages/CitizenCard/CitizenCard'
import Citizens from '@/pages/Citizens/Citizens'
import Dashboard from '@/pages/Dashboard/Dashboard'
import Feedback from '@/pages/Feedback/Feedback'
import Services from '@/pages/Services/Services'
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
            <Route path={ROUTES.SERVICES} element={<Services/>}/>
            <Route path={ROUTES.ANALYTICS} element={<Analytics/>}/>
            <Route path={ROUTES.FEEDBACK} element={<Feedback/>}/>
        </Route>
        <Route path='*' element={<Navigate to={ROUTES.DASHBOARD} replace/>}/>
    </Routes>
  )
}

export default AppRoutes