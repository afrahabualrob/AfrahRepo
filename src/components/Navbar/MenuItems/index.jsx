import React, { useEffect } from "react";
import MenuItem from "../MenuItem";
import styles from "./style.module.css";
import { Button, Grid } from "@mui/material";
import { useCookies } from "react-cookie";

const MenuItems = ({ listDirection, setIsMenuOpened }) => {
  const [cookie, setCookie, removeCookie] = useCookies();

  const handleRemoveCookie = () => {
    removeCookie("Token");
    setIsMenuOpened(false);
  };

  const menuItems = ["shop", "journal", "about"];
  return (
    
    <Grid
      container
      flexDirection={{ xs: "column", md: "row" }}
      spacing={2}
      alignItems="center"
      className={`${styles.menuList} ${styles[listDirection]}`}
    >
      {[] &&
        menuItems.map((item, index) => {
          return (
            <Grid item key={index} className={styles.menuItem}>
              <MenuItem menuItem={item} setIsMenuOpened={setIsMenuOpened} />
            </Grid>
          );
        })}
      <>
        {"Token" in cookie ? (
          <>
            <Grid item>
              <span
                className={styles.logoutBtn}
                onClick={handleRemoveCookie}
              >
               Logout 
              </span>
              
            </Grid>
          </>
        ) : (
          <></>
        )}
      </>
    </Grid>
  );
};

export default MenuItems;
