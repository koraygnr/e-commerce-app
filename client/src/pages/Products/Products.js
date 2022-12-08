import React, { useState } from 'react'
import styles from "./Products.module.scss"
import { useParams } from "react-router-dom"
import List from '../../components/List/List'
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Loading/Loading'

function Products() {

  const categoryId = Number(useParams().id)
  const [ maxPrice, setMaxPrice ] = useState(300)
  const [ sort, setSort ] = useState("asc")
  const [ selectedSubCats, setSelectedSubCats ] = useState([])
  const { data, isLoading } = useFetch(`/sub-categories?&[filters][products][categories][id]=${categoryId}`)

  function handleChange (e) {
    const value = e.target.value
    const isChecked = e.target.checked
    setSelectedSubCats(
      isChecked 
      ? [...selectedSubCats, value]
      : selectedSubCats.filter( (item) => item !== value)
      )
  }

  return (
    <div className={styles.container}>
      {/*  L E F T  S I D E   */}
      <div className={styles.left}>
        <div className={styles.filterItem}>
          <h2 className={styles.title}>Product Categories</h2>

          { isLoading
            ? <Loading />
            : data?.map( item => (
                <div className={styles.inputItem} key={item.id}>
                  <input 
                  type="checkbox" 
                  id={item.id} 
                  value={item.id}
                  onChange={ handleChange }
                  />
                  <label htmlFor={item.id}>{item.attributes.title}</label>
                </div>
            ))
          }

        </div>
        <div className={styles.filterItem}>
          <h2 className={styles.title}>Filter by price</h2>
          <div className={styles.inputItem}>
            <span>0</span>
            <input 
            type="range" 
            onChange={ (e) => setMaxPrice(e.target.value)}
            min={0} 
            max={300} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className={styles.filterItem}>
          <h2 className={styles.title}>Sort by</h2>
          <div className={styles.inputItem}>
            <input 
            type="radio" 
            id='asc' 
            value="asc" 
            name='price'
            onChange={ (e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className={styles.inputItem}>
            <input 
            type="radio" 
            id='desc' 
            value="desc" 
            name='price'
            onChange={ (e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      {/*  R I G H T  S I D E  */}
      <div className={styles.right}>
      <List 
        categoryId={categoryId} 
        maxPrice={maxPrice}
        sort={sort}
        subCats={selectedSubCats}
         />
      </div>
    </div>
  )
}

export default Products