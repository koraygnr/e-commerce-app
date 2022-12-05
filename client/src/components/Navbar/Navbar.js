import React from 'react'
import styles from "./Navbar.module.scss"
import { Link } from "react-router-dom"
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Cart from '../Cart/Cart';

function Navbar() {
  return (
        <div className={`${styles.navbar} container`}>
            {/* Navbar Left Side */}
            <div className={styles.left}>
              <div className={`${styles.category} hidden lg:block`}>
                <ul className={styles.categoryList}>
                  <li><Link to="/products/1">Women</Link></li>
                  <li><Link to="/products/2">Men</Link></li>
                  <li><Link to="/products/3">Accessories</Link></li>
                </ul> 
              </div>
              <div className='lg:hidden'>
              <Menu>
                <MenuButton as={Button} >
                <MenuIcon/>
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
                <li className='hidden lg:block'><Link to="/">Home</Link></li>
                <li className='hidden lg:block'><Link to="#">About</Link></li>
                <li className='hidden lg:block'><Link to="#">Contact</Link></li>
                <li><SearchIcon /></li>
                <li><PersonOutlineOutlinedIcon /></li>
                <li><FavoriteBorderOutlinedIcon/></li>
                <li>
                  <Menu>
                    <MenuButton>
                    <ShoppingCartOutlinedIcon />
                    </MenuButton>
                    <MenuList>
                      <div className={styles.cartModal}>

                        <Cart />

                      </div>
                    </MenuList>
                  </Menu>

                </li>
             </ul>
            </div> 
        </div>   
  )
}

export default Navbar


 