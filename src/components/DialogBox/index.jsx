import React from "react";
import DialogCard from "./DialogCard";
import { Dialog, DialogContent } from "@mui/material";
import NavDialog from "./NavDialog";

const DialogBox = ({ open, handleClose, productItem }) => {
  return (
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
        <NavDialog handleClose={handleClose} />
        <DialogContent>
          <DialogCard productItem={productItem} />
        </DialogContent>
      </Dialog>
  );
};

export default DialogBox;
