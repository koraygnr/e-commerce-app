import React from 'react'
import styles from "./Cart.module.scss"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Button from '../Buttons/Button';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { deleteItem, resetCart } from "../../redux/cartSlice/cartSlice"


function Cart() {

    const dispatch = useDispatch()
    const products = useSelector( state => state.cart.products)
    
    function totalPrice () {
        let total = 0
        products.forEach( item => 
            (total += item.quantity * item.price)
        )
        return total.toFixed(2)
    }

    
  return (
    <div className={styles.cart}>
        <h1>Products in your cart</h1>
        {
            products?.map( item => (
                <div className={styles.item} key={item.id}>
                    <img 
                    src={process.env.REACT_APP_UPLOAD_URL + item.img} 
                    alt=""/>
                    <div className={styles.details}>
                        <h3>{item.title}</h3>
                        <p>{item.desc?.substring(0,100)}</p>
                        <div className={styles.price}>
                            {item.quantity} x ${item.price}
                        </div>
                    </div>
                    <DeleteOutlineIcon
                    onClick={()=>dispatch(deleteItem(item.id))}
                    className={styles.deleteIcon} />
                </div>
            ))
        }

        <div className={styles.totalPrice}>
            <span>SUBTOTAL</span>
            <span>$ {totalPrice()}</span>
        </div>
        <Button w="full">PROCEED TO CHECKOUT</Button>
        <span 
        onClick={()=>dispatch(resetCart())}
        className={styles.reset}>Reset Cart</span>
    </div>
  )
}

export default Cart