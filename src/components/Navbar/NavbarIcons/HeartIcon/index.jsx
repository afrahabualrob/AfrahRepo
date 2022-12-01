import React, { useState } from "react";
import { IconButton, Dialog, DialogContent, Badge } from "@mui/material";
import FavoriteShopDialog from "../../../FavoriteShop/FavoriteShopDialog";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useFavoriteContext } from "../../../../Context/Favorites"

const HeartIcon = () => {
  const [openFavorites, setOpenFavorites] = useState(false);
  let { favoriteProducts } = useFavoriteContext();

  return (
    <>
      <IconButton onClick={() => setOpenFavorites(true)}>
        <Badge
          badgeContent={favoriteProducts.length}
          showZero
          sx={{ color: "#141414" }}
        >
          <FavoriteBorderIcon />
        </Badge>
      </IconButton>

      <FavoriteShopDialog
        setOpenFavorites={setOpenFavorites}
        openFavorites={openFavorites}
      />
    </>
  );
};

export default HeartIcon;
