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
      description: "An apple mobile which is nothing like apple",
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
      images: [
        "./assets/images/item1.png",
        "./assets/images/item1.1.png",
        "./assets/images/item1.png",
        "./assets/images/item1.1.png",
        "./assets/images/item1.png",
      ],
      sizes: [1, 2, 3, 4],
      details: [
        { subTitle: "artisan employment", info: "54 jobs" },
        { subTitle: "partnership", info: "Randall Armstrong" },
        { subTitle: "In collab:", info: "Augusta Mendoza" },
      ],
      availableQuantity: 20,
    },
    {
      id: 2,
      title: "Pueraria Mirifica And Study Phyto Estrogens",
      imgSrc: "./assets/images/item2.png",
      price: 599.0,
      date: "10/6/2022",
      description: "An apple mobile which is nothing like apple",
      rating: 3.9,
      images: [
        "https://dummyjson.com/image/i/products/7/1.jpg",
        "https://dummyjson.com/image/i/products/7/2.jpg",
        "https://dummyjson.com/image/i/products/7/3.jpg",
        "https://dummyjson.com/image/i/products/7/thumbnail.jpg",
      ],
      sizes: [1, 2, 3, 4],
      details: [
        { subTitle: "artisan employment", info: "20 jobs" },
        { subTitle: "partnership", info: "Randall Armstrong" },
        { subTitle: "In collab:", info: "Augusta Mendoza" },
      ],
      availableQuantity: 27,
    },
    {
      id: 3,
      title: "Pueraria Mirifica And Study Phyto Estrogens",
      imgSrc: "./assets/images/item3.png",
      price: 599.0,
      date: "10/8/2022",
      description: "An apple mobile which is nothing like apple",
      rating: 4.2,
      images: [
        "https://dummyjson.com/image/i/products/10/1.jpg",
        "https://dummyjson.com/image/i/products/10/2.jpg",
        "https://dummyjson.com/image/i/products/10/3.jpg",
        "https://dummyjson.com/image/i/products/10/thumbnail.jpeg",
      ],
      sizes: [1, 2, 3, 4],
      details: [
        { subTitle: "artisan employment", info: "34 jobs" },
        { subTitle: "partnership", info: "Randall Armstrong" },
        { subTitle: "In collab:", info: "Augusta Mendoza" },
      ],
      availableQuantity: 30,
    },

    {
      id: 4,
      title: "Pueraria Mirifica And Study Phyto Estrogens",
      imgSrc: "./assets/images/item4.png",
      price: 599.0,
      date: "9/1/2022",
      description: "An apple mobile which is nothing like apple",
      rating: 4.2,
      images: [
        "https://dummyjson.com/image/i/products/23/1.jpg",
        "https://dummyjson.com/image/i/products/23/2.jpg",
        "https://dummyjson.com/image/i/products/23/3.jpg",
        "https://dummyjson.com/image/i/products/23/4.jpg",
        "https://dummyjson.com/image/i/products/23/thumbnail.jpg",
      ],
      sizes: [1, 2, 3, 4],
      details: [
        { subTitle: "artisan employment", info: "50 jobs" },
        { subTitle: "partnership", info: "Randall Armstrong" },
        { subTitle: "In collab:", info: "Augusta Mendoza" },
      ],
      availableQuantity: 30,
    },
    {
      id: 5,
      title: "Pueraria Mirifica And Study Phyto Estrogens",
      imgSrc: "./assets/images/item5.png",
      price: 599.0,
      date: "10/6/2022",
      description:
        "An apple mobile which is nothing like appleAn apple mobile which is nothing like appleAn apple mobile which is nothing like apple",
      rating: 4.8,
      images: [
        "https://dummyjson.com/image/i/products/13/1.jpg",
        "https://dummyjson.com/image/i/products/13/2.png",
        "https://dummyjson.com/image/i/products/13/3.jpg",
        "https://dummyjson.com/image/i/products/13/4.jpg",
        "https://dummyjson.com/image/i/products/13/thumbnail.webp",
      ],
      sizes: [1, 2, 3, 4],
      details: [
        { subTitle: "artisan employment", info: "22 jobs" },
        { subTitle: "partnership", info: "Randall Armstrong" },
        { subTitle: "In collab:", info: "Augusta Mendoza" },
      ],
      availableQuantity: 22,
    },
    {
      id: 6,
      title: "Pueraria Mirifica And Study Phyto Estrogens",
      imgSrc: "./assets/images/item6.png",
      price: 599.0,
      date: "8/8/2022",
      description:
        "An apple mobile which is nothing like appleAn apple mobile which is nothing like appleAn apple mobile which is nothing like apple",
      rating: 3.8,
      images: [
        "https://dummyjson.com/image/i/products/13/1.jpg",
        "https://dummyjson.com/image/i/products/13/2.png",
        "https://dummyjson.com/image/i/products/13/3.jpg",
        "https://dummyjson.com/image/i/products/13/4.jpg",
        "https://dummyjson.com/image/i/products/13/thumbnail.webp",
      ],
      sizes: [1, 2, 3, 4],
      details: [
        { subTitle: "artisan employment", info: "64 jobs" },
        { subTitle: "partnership", info: "Randall Armstrong" },
        { subTitle: "In collab:", info: "Augusta Mendoza" },
      ],
      availableQuantity: 40,
    },
    {
      id: 7,
      title: "Pueraria Mirifica And Study Phyto Estrogens",
      imgSrc: "./assets/images/item7.png",
      price: 599.0,
      date: "10/9/2022",
      description:
        "An apple mobile which is nothing like appleAn apple mobile which is nothing like appleAn apple mobile which is nothing like apple",
      rating: 3.3,
      images: [
        "https://dummyjson.com/image/i/products/20/1.jpg",
        "https://dummyjson.com/image/i/products/20/2.jpg",
        "https://dummyjson.com/image/i/products/20/3.jpg",
        "https://dummyjson.com/image/i/products/20/4.jpg",
        "https://dummyjson.com/image/i/products/20/thumbnail.jpg",
      ],
      sizes: [1, 2, 3, 4],
      details: [
        { subTitle: "artisan employment", info: "88 jobs" },
        { subTitle: "partnership", info: "Randall Armstrong" },
        { subTitle: "In collab:", info: "Augusta Mendoza" },
      ],
      availableQuantity: 12,
    },
    {
      id: 8,
      title: "Pueraria Mirifica And Study Phyto Estrogens",
      imgSrc: "./assets/images/item8.png",
      price: 599.0,
      date: "7/25/2022",
      description:
        "An apple mobile which is nothing like appleAn apple mobile which is nothing like appleAn apple mobile which is nothing like apple",
      rating: 4.2,
      images: [
        "https://dummyjson.com/image/i/products/19/1.jpg",
        "https://dummyjson.com/image/i/products/19/2.jpg",
        "https://dummyjson.com/image/i/products/19/3.png",
        "https://dummyjson.com/image/i/products/19/thumbnail.jpg",
      ],
      sizes: [1, 2, 3, 4],
      details: [
        { subTitle: "artisan employment", info: "44 jobs" },
        { subTitle: "partnership", info: "Randall Armstrong" },
        { subTitle: "In collab:", info: "Augusta Mendoza" },
      ],
      availableQuantity: 10,
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
          );
        })}
    </div>
  );
};

export default FeaturedProducts;
