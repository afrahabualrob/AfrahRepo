import React from 'react'
import styles from './style.module.css'

const FilterOption = ({title}) => {
  return (
      <h6 className={styles.filterOption}>{title}</h6>
  )
}

export default FilterOption;