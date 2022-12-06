import React from "react";
import { Menu, Typography, MenuItem } from "@mui/material";

const MenuList = ({ anchorElNav, handleCloseNavMenu, menuItems }) => {

  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
      sx={{
        display: { xs: "block", md: "none" },
        backgroundColor: "rgba(51, 51, 58, 0.9)",
      }}
    >
      {menuItems.map((menuItem) => (
        <MenuItem
          key={menuItem}
          onClick={handleCloseNavMenu}
          sx={{
            width: "300px !important",
            background: "transparent !important",
          }}
        >
          <Typography textAlign="center">{menuItem}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default MenuList;
