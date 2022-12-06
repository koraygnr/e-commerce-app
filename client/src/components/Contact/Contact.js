import React from 'react'
import styles from "./Contact.module.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';

function Contact() {
  return (
    <div className={styles.contacts}>
        <div className={styles.textContent}>
          <p>BE IN TOUCH WITH US:</p>
        </div>
        <div className={styles.input}>
          <input
          type="email"
          placeholder='Enter your e-mail '
          />
          <button 
          className='hidden md:inline'
          >Join Us</button>
        </div>
        <div className={styles.social}>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <GoogleIcon />
        </div>
    </div>
  )
}

export default Contact