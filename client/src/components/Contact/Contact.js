import React from 'react'
import styles from "./Contact.module.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';

function Contact() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.textContent}>
        <p>BE IN TOUCH WITH US:</p>
        </div>
        <div>
        <input
        className='hidden md:inline focus:outline-0 ' 
        type="email"
        placeholder='Enter your e-mail '
         />
         <button 
         className='hidden md:inline'
         >Join Us</button>
        </div>
        <div className='flex gap-3 text-white'>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <GoogleIcon />
        </div>

    </div>
  )
}

export default Contact