import React, { useState } from 'react'
import styles from "./ProductDetail.module.scss"
import { useParams } from "react-router-dom"
import useFetch from '../../hooks/useFetch'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Loading from '../../components/Loading/Loading';
import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/cartSlice/cartSlice"
import Button from '../../components/Buttons/Button';
import LocationBar from '../../components/LocationBar/LocationBar';

function ProductDetail() {

  const dispatch = useDispatch()
  const id = useParams().id
  const { data, isLoading } = useFetch(`/products/${id}?populate=*`)
  const [selectedImg, setSelectedImg ] = useState("img")
  const [ quantity, setQuantity ] = useState(1)
  
  return (
    <>
        <LocationBar data={data} />
    {  isLoading 
        ? <Loading /> 
        : data && (
      <div className={`${styles.productDetail} container`}>
        <div className={styles.left}>
          <div className={styles.images}>
            <img 
            onClick={() => setSelectedImg("img")}
            src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} 
            alt="" />
            <img 
            onClick={() => setSelectedImg("img2")}
            src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} 
            alt="" />
          </div>
          <div className={styles.mainImg}>
            <img
            src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.[selectedImg]?.data?.attributes?.url} 
            alt="" />
          </div>
        </div>

        <div className={styles.right}>
          <h2>{data.attributes.title}</h2>
          <p className={styles.price}>$ {data.attributes.price}</p>
          <p className={styles.desc}>{data.attributes.desc}</p>
          <div className={styles.quantity}>
            <button onClick={ () => setQuantity( (prev) => prev === 1 ? 1 : prev - 1 )}>-</button>
            <span>{quantity}</span>
            <button onClick={ () => setQuantity( (prev) => prev + 1)}>+</button>
          </div>
          <div className={styles.buttons}>
            <Button
            onClick={ () => dispatch(addToCart(
              {
                id: data.id,
                title: data.attributes.title,
                desc: data.attributes.desc,
                price: data.attributes.price,
                img: data.attributes.img.data.attributes.url,
                quantity
              }
            ))}
            ><AddShoppingCartIcon /> ADD TO CART </Button>
            <button 
            className={styles.addToWishList}>
            <FavoriteBorderOutlinedIcon className={styles.favoriteIcon}/> ADD TO WISH LIST
          </button>
          </div>
        </div>
      </div>
      ) 
    }   
  </>
  )
}

export default ProductDetail