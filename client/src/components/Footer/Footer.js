import React from 'react'
import styles from "./Footer.module.scss"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className={styles.container}>
      {/* Top Footer */}
      <div className={styles.topFooter}>
        <div className={styles.col}>
          <h2>Categories</h2>
          <ul>
            <li><Link to="/products/1">Women</Link></li>
            <li><Link to="/products/2">Men</Link></li>
            <li><Link to="/products/3">Accessories</Link></li>
            <li>New Season</li>
          </ul>
        </div>
        <div className={styles.col}>
          <h2>Links</h2>
          <ul>
            <li>FAQ</li>
            <li>Pages</li>
            <li>Compare</li>
            <li>Cookies</li>
          </ul>
       </div>
        <div className={styles.col}>
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, reprehenderit ipsa perspiciatis, dolor ad assumenda sapiente quam fuga amet veniam eius suscipit temporibus illo atque porro sed vero dignissimos doloremque!</p>
        </div>
        <div className={styles.col}>
          <h2>Contact</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, reprehenderit ipsa perspiciatis, dolor ad assumenda sapiente quam fuga amet veniam eius suscipit temporibus illo atque porro sed vero dignissimos doloremque!</p>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className={styles.bottomFooter}>
        <div className={styles.left}>
          <p className={styles.logo}>KORAYSTYORE</p>
          <p>© Copyright 2022. All Rights Reserved</p>
        </div>
        <div className={styles.right}>
          <img 
          src="./assets/payment.png" 
          alt="paymentImg"/>
        </div>
      </div>

    </div>
  )
}

export default Footer