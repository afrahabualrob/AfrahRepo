import "./App.css";
import Nav from "./components//Nav";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/Pages/MainPage";
import TechniqueLanding from "./components/Pages/TechniqueLanding";
import Footer from "./components/Footer";
import ProductListing from "./components/ProductListing";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}
export default App;
