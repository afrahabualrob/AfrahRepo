import React from 'react'
import Nav from "../Nav";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
          <Nav />
          <Navbar />
          <Outlet />
          <Footer/>
    </div>
  )
}

export default Layout
