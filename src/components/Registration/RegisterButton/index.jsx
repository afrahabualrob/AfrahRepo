import React from 'react'
import styles from './style.module.css'

const RegisterButton = ({value}) => {
  return <button className={styles.registerButton}>{ value}</button>;
};

export default RegisterButton;