import React from "react";
import { Button } from "@mui/material";
import { useShoppingCart } from "../../Context/ShoppingCartContext"
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cart = () => {
  let { openCart, cartQuantity,cartItems } = useShoppingCart();
   cartQuantity = 8;
  return (
    <>
      <Badge
        color="primary"
        onClick={openCart}
        badgeContent={cartItems.length}
        showZero
      >
        <ShoppingCartIcon color="action" />
      </Badge>
    </>
  );
};

export default Cart;
