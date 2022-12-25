import React from 'react'
import Nav from "../Nav";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
          <Nav />
          <Navbar />
          <Outlet />
          <Footer/>
    </>
  )
}

export default Layout
