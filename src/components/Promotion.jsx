import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Promotion = () => {
  return (
    <>
    <div className="Promotion">
<Carousel
        interval={4000}
        autoPlay={true}
        infiniteLoop={true}
        stopOnHover
        animationHandler={'fade'}
        showArrows={false}
        showThumbs={false}>
                <div className='pro'>
                    <img src="../../public/list-menu.svg" />
                </div>
                <div className='pro'>
                    <img src="../../public/login.svg" />
                </div>
                <div className='pro'>
                    <img src="../../public/vite.svg" />
                </div>
     </Carousel>
    </div>
    </>
    
    
  )
}

export default Promotion