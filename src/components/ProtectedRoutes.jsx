import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import { useSelector } from 'react-redux'
import store from '../store'


const ProtectedRoutes = () => {

    const trainer = useSelector(state => state.trainer)

    console.log(trainer)

    if (trainer) {
        return <Outlet />
    }else {
        return <Navigate to='/'/>
    }

}

export default ProtectedRoutes
