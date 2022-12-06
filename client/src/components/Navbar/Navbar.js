import React from 'react'
import styles from "./Navbar.module.scss"
import { Link } from "react-router-dom"
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Cart from '../Cart/Cart';
import { useSelector } from "react-redux"

function Navbar() {

  const cartQuantity = (useSelector( state => state.cart.products)).length

  return (
        <div className={styles.container}>
          <div className={styles.navbar}>
            {/* Navbar Left Side */}
            <div className={styles.left}>
              <div className={styles.category}>
                <ul className={styles.categoryList}>
                  <li><Link to="/products/1">Women</Link></li>
                  <li><Link to="/products/2">Men</Link></li>
                  <li><Link to="/products/3">Accessories</Link></li>
                </ul> 
              </div>
              <div className={styles.dropMenu}>
              <Menu>
                <MenuButton >
                <MenuIcon className={styles.dropMenu} />
              </MenuButton>
              <MenuList>
                <Link to="/"><MenuItem>Home</MenuItem></Link>
                <Link to="/products/1"><MenuItem>Women</MenuItem></Link>
                <Link to="/products/2"><MenuItem>Men</MenuItem></Link>
                <Link to="/products/3"><MenuItem>Accessories</MenuItem></Link>
              </MenuList>
            </Menu>
            </div>
            </div>
            {/* Navbar Center */}
            <div className={styles.center}>
              <Link to="/">
              <p className={styles.logo}>KORAYSTORE</p>
              </Link>
            </div>
            {/* Navbar Right Side */}
            <div className={styles.right}>
              <ul className={styles.menuList}>
                <li className={styles.link}><Link to="/">Home</Link></li>
                <li className={styles.link}><Link to="#">About</Link></li>
                <li className={styles.link}><Link to="#">Contact</Link></li>
                <li><SearchIcon className={styles.menuIcon} /></li>
                <li><PersonOutlineOutlinedIcon className={styles.menuIcon} /></li>
                <li><FavoriteBorderOutlinedIcon className={styles.menuIcon}/></li>
                <li>
                  <div className={styles.deneme}>
                  <Menu>
                    <MenuButton className={styles.cartButton}>
                    <ShoppingCartOutlinedIcon className={styles.menuIcon}/>
                    {
                      cartQuantity > 0
                      ? <span className={styles.cartQuantity}>{cartQuantity}</span>
                      : ""
                    }
                    </MenuButton>
                    <MenuList>
                      <div className={styles.cartModal}>
                        {/*  C a r t  C o m p o n e n t  */}
                        <Cart />
                      </div>
                    </MenuList>
                  </Menu>
                  </div>
                </li>
             </ul>
            </div> 
          </div>
        </div>   
  )
}

export default Navbar


 