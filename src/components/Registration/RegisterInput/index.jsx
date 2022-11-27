import React from 'react'
import styles from './style.module.css'

const RegisterInput = ({type,name,placeholder}) => {
    return <input type={type} name={name} placeholder={name} required className={styles.registerInput} />;
};

export default RegisterInput;