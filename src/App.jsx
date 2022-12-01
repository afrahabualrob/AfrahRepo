import "./App.css";
import "./App.css";
import React from "react";
import Routing from "./components/Routes/Routing";
import { ShoppingCartProvider } from "./Context/ShoppingCartContext";
import Registration from "./components/Registration";
import ProductDetailsPage from "./components/Pages/ProductDetailsPage";
import { FavoriteProvider } from "./Context/Favorites";

function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
        <FavoriteProvider>
          <Routing />
        </FavoriteProvider>
      </ShoppingCartProvider>

      <Registration />
      {/* <ProductDetailsPage/> */}
    </div>
  );
}
export default App;
