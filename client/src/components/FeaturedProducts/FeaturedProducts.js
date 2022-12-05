import React from 'react'
import styles from "./FeaturedProducts.module.scss"
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'
import Loading from '../Loading/Loading'


function FeaturedProducts( {type} ) {

  const { data, isLoading } = useFetch(`/products?populate=*&filters[type][$eq]=${type}`)
   
  return (
    <div className={`${styles.featuredProducts} container`}>
      <div className={styles.header}>
          <h1>
            {type} Products
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae voluptatibus eum repudiandae fuga laboriosam reiciendis, dolorum sunt quibusdam animi et ex neque officiis ea modi deleniti! Nisi repellendus a dolorum.
          </p>
      </div>
      <div className={styles.cards}>
        {   isLoading 
            ? <Loading /> 
            : data && data.map( item => (
              <Card data={item} key={item.id} />
          ))
        }
      </div>
    </div>
  )
}

export default FeaturedProducts