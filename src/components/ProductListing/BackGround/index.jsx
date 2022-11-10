import React from "react";
import styles from "./style.module.css";

const BackGround = ({ expandedItem }) => {
  const expandedItems = [
    {
      id: 1,
      name: "clothes",
      description: "This is a Cloths Category",
      img: "https://cdn.xxl.thumbs.canstockphoto.com/different-clothes-on-a-white-background-sale-banner-illustration_csp80008522.jpg",
    },
    {
      id: 2,
      name: "others",
      description: "This is a Others Category",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdhhDErYR0AwJRni-SR1NnF_73d7B8KGJoCA&usqp=CAU",
    },
    {
      id: 3,
      name: "women's clothing",
      description: "This is a women's clothing",
      img: "https://st4.depositphotos.com/4278641/27319/i/1600/depositphotos_273197232-stock-photo-fashion-clothing-with-seashells-and.jpg",
    },
    {
      id: 4,
      name: "men's clothing",
      description: "This is a men's clothing",
      img: "https://img.freepik.com/premium-photo/men-s-clothes-with-brown-shoes-blue-shirt-sunglasses-white-background-men-s-casual-outfits-man-clothing-set-flat-lay-men-s-fashion-casual-outfits-accessories_11358-1560.jpg",
    },
    {
      id: 5,
      name: "jewelery",
      description: "This is a jewelery",
      img: "https://st3.depositphotos.com/6010472/18845/i/1600/depositphotos_188455071-stock-photo-flat-lay-female-fashion-accessories.jpg",
    },
    {
      id: 6,
      name: "electronics",
      description: "This is a electronics",
      img: "",
    },
  ];
//   const selected = expandedItems.filter((item) => item.name === expandedItem);
  return (
    <>
      {/* {console.log(selected[0].id)} */}
     
    </>
  );
};

export default BackGround;
