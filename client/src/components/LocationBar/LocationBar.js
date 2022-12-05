import React from 'react'
import styles from "./LocationBar.module.scss"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom"

function LocationBar( {data}) {
  return (
    <div className={`${styles.locationBar} container`}>
          <Link to="/">Home</Link>
          <ArrowForwardIosIcon className={styles.arrowIcon} />
          <Link to={`/products/${data?.attributes?.categories?.data[0]?.id}`}>
            { data?.attributes?.categories?.data[0]?.attributes?.title }
          </Link>
          <ArrowForwardIosIcon className={styles.arrowIcon}/>
          { data?.attributes?.title }
    </div>
  )
}

export default LocationBar