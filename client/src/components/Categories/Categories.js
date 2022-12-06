import React from 'react'
import styles from "./Categories.module.scss"
import useFetch from '../../hooks/useFetch'
import Loading from '../Loading/Loading'
import { Link } from "react-router-dom"

function Categories() {

  const { data, isLoading } = useFetch(`/categories?populate=*`)

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      {data &&
        (
          <div className={styles.categories}>
            {/* C o l - L e f t */}
            <div className={styles.colLeft}>
              <div className={styles.col}>
              <Link to="/products/1">
                <img 
                className={styles.img} 
                src={process.env.REACT_APP_UPLOAD_URL + data[0].attributes.img.data.attributes.url} 
                alt="womenCatImg"/>
                <span className={styles.title}>WOMEN</span>
              </Link>
              </div>
              <div className={styles.col}>
              <Link to="/products/2" >
                <img 
                className={styles.img} 
                src={process.env.REACT_APP_UPLOAD_URL + data[1].attributes.img.data.attributes.url} 
                alt="menCatImg"/>
                <span className={styles.title}>MEN</span>
              </Link>
              </div>
            </div>
            {/* C o l - M i d */}
            <div className={styles.colMid}>
              <div className={styles.col}>
              <Link to="/products/3">
                <img 
                className={styles.img} 
                src={process.env.REACT_APP_UPLOAD_URL + data[2].attributes.img.data.attributes.url} 
                alt="accCatImg" />
                <span className={styles.title}>ACCESSORIES</span>
              </Link>
              </div>
            </div>
            {/* C o l - R i g h t */}
            <div className={styles.colRight}>
              <div className={styles.col}>
              <Link to="/products/4">
                <img 
                className={styles.img} 
                src={process.env.REACT_APP_UPLOAD_URL + data[3].attributes.img.data.attributes.url} 
                alt="shoesCatImg" />
                <span className={styles.title}>SHOES</span>
              </Link>
              </div>
              <div className={styles.col}>
              <Link to="/products/5">
                <img 
                className={styles.img} 
                src={process.env.REACT_APP_UPLOAD_URL + data[4].attributes.img.data.attributes.url} 
                alt="bestSellersCatImg" />
                <span className={styles.title}>BEST SELLERS</span>
              </Link>
              </div>
            </div>
          </div>
        )}
    </>
  )
}

export default Categories