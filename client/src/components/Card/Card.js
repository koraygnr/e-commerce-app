import React from 'react'
import styles from "./Card.module.scss"
import { Link } from "react-router-dom"

function Card({ data }) {

    return (

    <Link to={`/product/${data.id}`}>
    <div className={styles.card}>
            <div className={styles.images}>
                <img 
                className={styles.cardImg} 
                src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} 
                alt="cardImg" />
                <img 
                className={styles.cardImg2} 
                src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} 
                alt="cardImg2" />

                {data.attributes.isNew &&
                    <span className={styles.isNewSeason}>New Season</span>
                }
            </div>
            <h2 
            className={styles.cardTitle}
            >{data.attributes.title}</h2>
            <div className={styles.prices}>
                <span className={styles.oldPrice}
                >${data.attributes.old_price}</span>
                <span className={styles.price}
                >${data.attributes.price}</span>
            </div>
        </div>
    </Link>
        
)
}

export default Card