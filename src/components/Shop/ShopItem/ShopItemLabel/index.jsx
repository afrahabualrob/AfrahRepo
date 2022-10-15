import React from 'react'
import styles from "./style.module.css";


const ShopItemLabel = ({category}) => {
    return <label className={styles.shopItemLabel}> {category}</label>;
};

export default ShopItemLabel;
