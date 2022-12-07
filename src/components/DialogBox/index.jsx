import React from "react";
import DialogCard from "./DialogCard";
import { Dialog, DialogContent, Grid } from "@mui/material";
import NavDialog from "./NavDialog";
import ViewButton from "../Featured/ViewButton";
import { Link } from "react-router-dom";

const DialogBox = ({ open, handleClose, productItem }) => {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
      <NavDialog handleClose={handleClose} />
      <DialogContent>
        <DialogCard productItem={productItem} />
        <Grid container justifyContent="center">
          <Grid item sx={{ pt: 4 }}>
            <Link to={`/products/${productItem.id}`}>
              <ViewButton value="View Full product Details" />
            </Link>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
