import "./App.css";
import "./App.css";
import React from "react";
import Routing from "./components/Routes/Routing";
import { ShoppingCartProvider } from "./Context/ShoppingCartContext";
import { FavoriteProvider } from "./Context/Favorites";

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
