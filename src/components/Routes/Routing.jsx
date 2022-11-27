import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import TechniqueLanding from "../Pages/TechniqueLanding";
import ProductListing from "../ProductListing";
import Layout from "./Layout";
import AboutPage from "../Pages/AboutPage";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="shop" element={<ProductListing />} />
          <Route path="about" element={<AboutPage/>}/>
          <Route path="fabric" element={<TechniqueLanding />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
