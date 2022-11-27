import React, { createContext, useContext, useState, useEffect } from "react";
import ShoppingCart from "../components/ShoppingCart";
import axios from "axios";

// export const CartItem = {
//   id,
//   quantity
// };

const ShoppingCartContext = createContext(null);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  // const cartQuantity = cartItems.reduce(
  //   (quantity, item) => item.quantity + quantity,
  //   0
  // );
  const [productsJson, setProductJson] = useState([]);

  const getData = async () => {
    await axios
      .get("/productsJSON.json")
      .then((res) => {
        setProductJson(res.data);
        // setFilteredProducts(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const increaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [
          ...currItems,
          {
            id,
            quantity: 1,
          },
        ];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };
  //decrease done
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
    return cartItems.find((item) => item.id === id).quantity;
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
        // getItemQuantity,
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
