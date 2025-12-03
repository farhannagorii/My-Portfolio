import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'

function Layout() {
    return (
        <div>

          <Navbar/>
         
            <Outlet />
        </div>
    )
}

export default Layout
