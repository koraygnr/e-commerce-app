import React from 'react'
import Slider from "react-slick";
import styles from "./HeroSlider.module.scss"
import useFetch from '../../hooks/useFetch';
import Loading from '../Loading/Loading';
// import { useSelector, useDispatch } from "react-redux"
// import { getSliderItems } from "../../redux/sliderSlice/sliderSlice"

function HeroSlider() {

  // const dispatch = useDispatch()
  // const sliderItems = useSelector( (state) => state.slider.items)
  // const status = useSelector( (state) => state.slider.status)
  const { data, isLoading } = useFetch(`/sliders?populate=*`)

//  useEffect( ()=> {
//   dispatch(getSliderItems())
//  },[dispatch])

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false
    };

    // if ( isLoading ) {
    //   return <Loading />
    // }

  return (
    <div className={styles.slider}>
           {
             isLoading 
             ? <Loading />
             : (
                <Slider {...settings}>
                {
                  data && data[0]?.attributes.slider_img.data.map( item => (
              
                  <div className={styles.sliderItem} key={item.id} >
                    <img 
                    className={styles.sliderImg} 
                    src={process.env.REACT_APP_UPLOAD_URL + item.attributes.url} 
                    alt="sliderImg" />
                  </div>
                  ))
                }
                </Slider>
                )
           }       
    </div>
  )
}

export default HeroSlider