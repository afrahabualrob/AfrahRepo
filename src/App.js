import "./App.css";
import Nav from "./components//Nav";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/Pages/MainPage";
import ProductListingPage from "./components/Pages/ProductListingPage";
import TechniqueLanding from "./components/Pages/TechniqueLanding";
import Footer from "./components/Footer";
import ProductListing from "./components/ProductListing";
import "./App.css";

function App() {
  // const menuItems = ["shop", "fabric", "journal", "about"];

  return (
    <div className="App">
      <Nav />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/shop" element={<ProductListing />}></Route>
        <Route path="/fabric" element={<TechniqueLanding />}></Route>
      </Routes>
      {/* <ProductListing />
      <Footer /> */}
    </div>
  );
}
export default App;
