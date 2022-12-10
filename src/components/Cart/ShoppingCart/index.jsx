import React from "react";
import { Container, Drawer } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import IconButton from "@mui/material/IconButton";
import { useShoppingCart } from "../../../Context/ShoppingCartContext";
import CartItem from "../CartItem";
import EmptyCart from "../EmptyCart";

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
      {cartItems.length === 0 && <EmptyCart closeCart={closeCart} />}
      <Container>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </Container>
    </Drawer>
  );
};

export default ShoppingCart;
