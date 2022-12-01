import React from "react";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import styles from "./style.module.css";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteShop from "../../FavoriteShop";


const FavoriteShopDialog = ({ openFavorites, setOpenFavorites }) => {
  const handleClose = () => {
    setOpenFavorites(false);
  };
  return (
    <Dialog open={openFavorites} onClose={handleClose} width="lg">
      <div className={styles.dialogNav}>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
          sx={{ float: "right" }}
        >
          <CloseIcon />
        </IconButton>
      </div>

      <DialogContent>
        <FavoriteShop />
      </DialogContent>
    </Dialog>
  );
};

export default FavoriteShopDialog;
