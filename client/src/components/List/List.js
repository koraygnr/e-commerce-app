import React from 'react'
import styles from "./List.module.scss"
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'
import Loading from "../Loading/Loading"

function List( { categoryId, maxPrice, sort, subCats }) {

  const { data, isLoading } = useFetch(`/products?populate=*&[filters][categories][id]=${categoryId}${subCats.map( item => `&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`)

  return (
    <div className={styles.list}>
        {      
            isLoading
            ? <Loading />
            : data && data?.map(item => (
                <Card data={item} key={item.id}/>
            )) 
        }
    </div>
  )
}

export default List