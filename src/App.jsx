import "./App.css";
import "./App.css";
import React from "react";
import Routing from "./components/Routes/Routing";
import { ShoppingCartProvider } from "./Context/ShoppingCartContext";
import Registration from "./components/Registration";
import ProductDetailsPage from "./components/Pages/ProductDetailsPage";
import { FavoriteProvider } from "./Context/Favorites";
import Navbar2 from "./components/Navbar2";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
        <FavoriteProvider>
          <Routing />
        </FavoriteProvider>
      </ShoppingCartProvider>
    </div>
  );
}
export default App;
