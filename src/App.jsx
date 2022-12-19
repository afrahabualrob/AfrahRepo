import React from "react";
import Routing from "./components/Routes/Routing";
import { ShoppingCartProvider } from "./Context/ShoppingCartContext";
import { FavoriteProvider } from "./Context/Favorites";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <ShoppingCartProvider>
        <FavoriteProvider>
          <Routing />
        </FavoriteProvider>
      </ShoppingCartProvider>
    </ErrorBoundary>
  );
}
export default App;
