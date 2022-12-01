import React, { createContext, useContext, useState } from "react";
import { useShoppingCart } from "./ShoppingCartContext";


const FavoriteContext = createContext(null);

export const useFavoriteContext = () => {
  return useContext(FavoriteContext);
};

export function FavoriteProvider({ children }) {
  const { productsJson } = useShoppingCart();

  const [favoriteProducts, setFavoriteProducts] = useState([]);

  const addToFavorites = (id) => {
    if (favoriteProducts.find((item) => item.id === id))
      setFavoriteProducts(favoriteProducts.filter((item) => item.id !== id));
    else
      setFavoriteProducts([
        ...favoriteProducts,
        productsJson.find((item) => item.id === id),
      ]);
  };
  
    const removeFromFavorites = (id) => {
    setFavoriteProducts(favoriteProducts.filter((item) => item.id !== id));
  };
  return (
    <FavoriteContext.Provider
      value={{
        addToFavorites,
        favoriteProducts,
        removeFromFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
