import React from "react";
import ProductCard from "../../ProductCard";
import styles from "./style.module.css";

const FeaturedProducts = () => {
  const featureProduct = [
    {
      id: 1,
      title: "Pueraria Mirifica And Study Phyto Estrogens",
      imgSrc: "./assets/images/item1.png",
      price: 599.0,
      date: "10/7/2022",
    },
    {
      id: 2,
      title: "Pueraria Mirifica And Study Phyto Estrogens",
      imgSrc: "./assets/images/item2.png",
      price: 599.0,
      date: "10/6/2022",
    },
    {
      id: 3,
      title: "Pueraria Mirifica And Study Phyto Estrogens",
      imgSrc: "./assets/images/item3.png",
      price: 599.0,
      date: "10/8/2022",
    },
    {
      id: 4,
      title: "Pueraria Mirifica And Study Phyto Estrogens",
      imgSrc: "./assets/images/item4.png",
      price: 599.0,
      date: "9/1/2022",
    },
    {
      id: 5,
      title: "Pueraria Mirifica And Study Phyto Estrogens",
      imgSrc: "./assets/images/item5.png",
      price: 599.0,
      date: "10/6/2022",
    },
    {
      id: 6,
      title: "Pueraria Mirifica And Study Phyto Estrogens",
      imgSrc: "./assets/images/item6.png",
      price: 599.0,
      date: "8/8/2022",
    },
    {
      id: 7,
      title: "Pueraria Mirifica And Study Phyto Estrogens",
      imgSrc: "./assets/images/item7.png",
      price: 599.0,
      date: "10/9/2022",
    },
    {
      id: 8,
      title: "Pueraria Mirifica And Study Phyto Estrogens",
      imgSrc: "./assets/images/item8.png",
      price: 599.0,
      date: "7/25/2022",
    },
  ];
  return (
    <div className={styles.featuredProducts}>
      {[] &&
        featureProduct.map((product) => {
          const { id } = product;
          return (
            <div key={id} className={styles.featuredProduct_item}>
              <ProductCard productItem={product} />
            </div>
          ); //return
        })}
    </div>
  );
};

export default FeaturedProducts;
