import React, { useState } from "react";
import styles from "./style.module.css";
import MenuItems from "../Navbar/MenuItems";
// import UserInformation from '../UserInformation'
import NavbarIcons from "../Navbar/NavbarIcons";
import BurgerMenu from "./BurgerMenu";

const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const MenuStatus = isMenuOpened ? "openedMenu" : "closedMenu";

  return (
    <>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <div className={styles.leftNavbar}>
            <div className={styles.logo}>matter</div>
            <div className={styles.menuItems}>
              <MenuItems listDirection="row" />
            </div>
          </div>

          <div className={styles.rightNavbar}>
            <div className={styles.rightNavbar_content}>
              <button className={styles.loginBtn}>login</button>
              <NavbarIcons />
              <BurgerMenu
                isMenuOpened={isMenuOpened}
                setIsMenuOpened={setIsMenuOpened}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles[MenuStatus]}`}>
        <div className={styles.menuInMobile}>
          <MenuItems listDirection="column" MenuStatus={MenuStatus} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
