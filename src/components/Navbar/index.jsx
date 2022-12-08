import React, { useState } from "react";
import styles from "./style.module.css";
import MenuItems from "../Navbar/MenuItems";
import NavbarIcons from "../Navbar/NavbarIcons";
import BurgerMenu from "./BurgerMenu";
import LoginBtn from "./LoginBtn";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const MenuStatus = isMenuOpened ? "openedMenu" : "closedMenu";

  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className={styles.navbar}
      >
        <Grid
          item
          container
          alignItems="center"
          xs="auto"
          flexDirection="row"
          spacing={4}
        >
          <Grid item>
            <Link to="/" className={styles.logo}> matter</Link>
          </Grid>
          <Grid item className={styles.menuItems}>
            <MenuItems listDirection="row" setIsMenuOpened={setIsMenuOpened} />
          </Grid>
        </Grid>

        <Grid item>
          <Grid container spacing={2}>
            <Grid item>
              <LoginBtn />
            </Grid>
            <Grid item>
              <NavbarIcons />
            </Grid>
            <Grid item>
              <BurgerMenu
                isMenuOpened={isMenuOpened}
                setIsMenuOpened={setIsMenuOpened}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className={`${styles[MenuStatus]}`}>
        <div className={styles.menuInMobile}>
          <MenuItems listDirection="column" setIsMenuOpened={setIsMenuOpened} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
