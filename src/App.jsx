import "./App.css";
import "./App.css";
import React from "react";
import Routing from "./components/Routes/Routing";
import { ShoppingCartProvider } from "./Context/ShoppingCartContext";
import Registration from "./components/Registration";
import ProductDetailsPage from "./components/Pages/ProductDetailsPage";

function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
        <Routing />
      </ShoppingCartProvider>
      <Registration />
      <ProductDetailsPage/>
    </div>
  );
}
export default App;
