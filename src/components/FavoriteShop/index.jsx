import React from "react";
import { useFavoriteContext } from "../../Context/Favorites";
import {
  Table,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
} from "@mui/material";
import styles from "./style.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmptyFavorite from "./EmptyFavorite";

const FavoriteShop = () => {
  let { removeFromFavorites, favoriteProducts } = useFavoriteContext();

  return (
    <>
      {favoriteProducts.length === 0 ? (
        <EmptyFavorite />
      ) : (
        <TableContainer>
          <Table sx={{ minWidth: 500 }} aria-label="Favorite product">
            <TableBody>
              {favoriteProducts.map((favoriteProduct) => {
                const { id, title, image } = favoriteProduct;
                return (
                  <TableRow key={id}>
                    <TableCell className={styles.imageWrapper}>
                      <img src={image} className={styles.image} />
                    </TableCell>
                    <TableCell>{title}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => removeFromFavorites(id)}>
                        <FavoriteIcon sx={{ color: "red" }} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default FavoriteShop;
