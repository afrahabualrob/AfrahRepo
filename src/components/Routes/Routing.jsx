import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
const MainPage = React.lazy(() => import("../Pages/MainPage"));
const ProductListing = React.lazy(() => import("../ProductListing"));
const AboutPage = React.lazy(() => import("../Pages/AboutPage"));
const JournalPage = React.lazy(() => import("../Pages/JournalPage"));
const ProductDetailsPage = React.lazy(() =>
  import("../Pages/ProductDetailsPage")
);
const Loader = React.lazy(() => import("../Pages/Loader"));
const NoMatch = React.lazy(() => import("../Pages/NoMatch"));

const Routing = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="shop" element={<ProductListing />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="journal" element={<JournalPage />} />
            <Route
              path="/products/:productId"
              element={<ProductDetailsPage />}
            />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Routing;
