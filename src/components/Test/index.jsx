import {
  Button,
  Dialog,
  Grid,
  Container,
  Toolbar,
  AppBar,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Navbar from "../Navbar";

export const Test = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={handleClickOpen}>Open dialog</Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        // TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Sound
            </Typography>

            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Navbar/>
      </Dialog>
      ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
    </>
  );
};

export default Test;


// <div key={id} className={styles.dialogCard}>
//   <div className={styles.leftDialogCard}>
//     <DialogImage images={images} />
//   </div>

//   <div className={styles.rightDialogCard}>
    // <p className={styles.title}>{title} </p>
    // <div className={styles.PriceAndRate}>
    //   <p className={styles.price}>SGD {price}</p>
    //   <div className={styles.stars}>
    //     <Rating rating={rating} />
    //   </div>
    // </div>
    // <div className={styles.dialogItemDesc}>
    //   <h5 className={styles.dialogSubTitle}>Description</h5>
    //   <p className={styles.description}>{description}</p>
    // </div>
    // <DialogProductDetails details={details} />
    // <DialogProductSize sizes={sizes} />
    // <div>
    //   <div className={styles.quantityPart}>
    //     <FilterOption title="Quantity" />

    //     <div className={styles.quantityContent}>
    //       <DialogProductQuantity availableQuantity={availableQuantity} />
    //       <button className={styles.addToCartBtn}>Add to cart</button>
    //       <div className={styles.AddToWishPart}>
    //         <img src="/assets/icons/questionMark.svg" alt="Question Mark " />
    //         <button className={styles.AddToWishlistBtn}>Add to wishlist</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
//   </div>
// </div>;*}