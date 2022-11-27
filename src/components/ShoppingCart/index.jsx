import React from "react";
// import { Offcanvas, Stack } from "react-bootstrap";
// import { formatCurrency } from "../utilities/formatCurrency";

import { Drawer } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import IconButton from "@mui/material/IconButton";
import { useShoppingCart } from "../../Context/ShoppingCartContext";
import CartItem from "../Cart/CartItem";
import EmptyCart from "../Shop/EmptyCart";

const ShoppingCart = ({ isOpen }) => {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Drawer
      PaperProps={{
        sx: { width: "70%" },
      }}
      variant="persistent"
      anchor="right"
      open={isOpen}
    >
      <div>
        <IconButton
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            width: "auto",
            marginTop: "5px",
          }}
          aria-label="open drawer"
          edge="end"
          onClick={closeCart}
        >
          <ChevronLeftIcon />
        </IconButton>
      </div>
      {cartItems.length === 0 && <EmptyCart />}
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </Drawer>

    //       <div className="ms-auto fw-bold fs-5">
    //         Total{" "}
    //         {formatCurrency(
    //           cartItems.reduce((total, cartItem) => {
    //             const item = storeItems.find((i) => i.id === cartItem.id);
    //             return total + (item?.price || 0) * cartItem.quantity;
    //           }, 0)
    //         )}
    //       </div>
  );
};

export default ShoppingCart;
