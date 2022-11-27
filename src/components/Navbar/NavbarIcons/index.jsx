import React from 'react'
import styles from "./style.module.css";
import Cart from '../../Cart';
import Badge from "@mui/material/Badge";


const NavbarIcons = () => {
  const navbar_icons = [
    { id: 1, icon_src: "./assets/icons/heart.svg", title: "heart_Icon" },
    { id: 2, icon_src: "./assets/icons/shape.svg", title: "shape_Icon" },
    // { id: 3, icon_src: "./assets/icons/search.svg", title: "search_Icon" },
  ];
  return (
    <div className={styles.navbar_icons}>
      {navbar_icons.map((icon) => {
        const { id, title, icon_src } = icon;
        return (
          <img
            className={styles.navbar_icon}
            key={id}
            src={icon_src}
            alt={title}
          />
        );
      })}
      <Cart />
    </div>
  );
};

export default NavbarIcons;
