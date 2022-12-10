import React from "react";
// import { Button } from "@mui/material";
import { useShoppingCart } from "../../Context/ShoppingCartContext";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";

const Cart = () => {
  let { openCart, cartQuantity, cartItems } = useShoppingCart();
  cartQuantity = 8;
  return (
    <div           onClick={openCart}
>
      <IconButton>
        <Badge
          color="primary"
          badgeContent={cartItems.length}
          showZero
        >
          <ShoppingCartIcon color="action" />
        </Badge>
      </IconButton>
    </div>
  );
};

export default Cart;
