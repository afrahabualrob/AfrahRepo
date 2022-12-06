import React, { useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
  Grid,
  MenuItem,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuList from "./MenuList";
import styles from "./style.module.css";

const Navbar2 = () => {
  const menuItems = ["shop", "journal", "about"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            className={styles.logo}
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              flexGrow: 1,
            }}
          >
            Matter
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              border: "2px solid",
            }}
          >
            {menuItems.map((menuItem) => (
              <Button
                key={menuItem}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {menuItem}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <p>A</p>
              </Grid>
              <Grid item>
                <p>Cart2</p>
              </Grid>
              <Grid item>
                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <MenuList
                    anchorElNav={anchorElNav}
                    handleCloseNavMenu={handleCloseNavMenu}
                    menuItems={menuItems}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>{" "}
        </Toolbar>{" "}
      </Container>
    </AppBar>
  );
};

export default Navbar2;
