import React from 'react'
import { Outlet, Route } from 'react-router-dom'
import {Navbar, Footer} from "../components/index.jsx"


function Layout() {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout