import React, { createContext, useContext, useState, useEffect } from "react";
import ShoppingCart from "../components/Cart/ShoppingCart";
import axios from "axios";

const ShoppingCartContext = createContext(null);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [productsJson, setProductJson] = useState([]);

  const getData = async () => {
    await axios
      .get("/productsJSON.json")
      .then((res) => {
        setProductJson(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const increaseCartQuantity = (id,num) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [
          ...currItems,
          {
            id,
            quantity: num,
          },
        ];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + num,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          if (item.quantity === 1) return item;
          else
            return {
              ...item,
              quantity: item.quantity - 1,
            };
        } else return item;
      })
    );

    console.log(cartItems);
  };

  function getItemQuantity(id) {
    return productsJson.find((item) => item.id === id).quantity;
  }

  function removeFromCart(id) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        openCart,
        closeCart,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        productsJson,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
