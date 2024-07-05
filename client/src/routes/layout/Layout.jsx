import React, { useContext } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './layout.scss'
import Homepage from "../homepage/Homepage"
import { Navigate, Outlet } from "react-router-dom" 
import { AuthContext } from '../../context/AuthContext'



function Layout() {
  return (
    <div className='layout'>
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="content">
          <Outlet/>
        </div>
    </div>
  )
}

function RequireAuth() {
  const {currentUser} = useContext(AuthContext)
  return (
    currentUser?<div className='layout'>
    <div className="navbar">
        <Navbar/>
    </div>
    <div className="content">
      <Outlet/>
    </div>
</div>:<Navigate to='/login'/>
    
  )
}



export {Layout,RequireAuth};
