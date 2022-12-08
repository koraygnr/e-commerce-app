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
import { useToast } from '@chakra-ui/react'


function ProductDetail() {

  const dispatch = useDispatch()
  const id = useParams().id
  const toast = useToast()
  const { data, isLoading } = useFetch(`/products/${id}?populate=*`)
  const [selectedImg, setSelectedImg ] = useState("img")
  const [ quantity, setQuantity ] = useState(1)

  function handleSubmit() {
    dispatch(addToCart(
      {
        id: data.id,
        title: data.attributes.title,
        desc: data.attributes.desc,
        price: data.attributes.price,
        img: data.attributes.img.data.attributes.url,
        quantity
      }))
      toast({
        title: 'Successful',
        description: "The product has been added to your cart",
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
  }
  
  return (
    <>
        <LocationBar data={data} />
    {  isLoading 
        ? <Loading /> 
        : data && (
      <div className={styles.container}>
      <div className={styles.productDetail}>
        {/*  L E F T  S I D E   */}
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
        {/*  R I G H T  S I D E   */}
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
            onClick={ handleSubmit }
            ><AddShoppingCartIcon /> ADD TO CART </Button>
            <button 
            className={styles.addToWishList}>
            <FavoriteBorderOutlinedIcon className={styles.favoriteIcon}/> ADD TO WISH LIST
          </button>
          </div>
        </div>
      </div>
      </div>
      ) 
    }   
  </>
  )
}

export default ProductDetail