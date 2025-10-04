import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom'; 

const Item = () => {
  return (
    <>
    {/*block1*/}
    <div className="item-wrapper">
      <div className="item-col1-row1-item-begery">
        <Link to="/begery">
        <Carousel showStatus={false} showIndicators={false} showArrows={false} showThumbs={false}>

            <span className="Begery">
              <h3>Begery</h3>
              <br />
              <br />
              <img src="/waffle.png" alt="profile" />
            </span>
            
        </Carousel>
        </Link>
      </div>

      <div className="item-col2-row1-item-coffee">
        <Link to="/coffee"> 
        <Carousel autoPlay interval={4000} infiniteLoop stopOnHover showStatus={false} showIndicators={false} showArrows={false} showThumbs={false}>
          
              <span className="coffee">
                <h3>Coffee</h3>
                <img src="/capuchi.png" alt="coffee" />
              </span>
           
        </Carousel>
         </Link> 
      </div>
    </div>

    {/*Block2*/}
    <div className="item-wrapper2">
       <div className="item-col1-row2-item-milk">
        <Link to="/milk">
        <Carousel autoPlay interval={4000} infiniteLoop stopOnHover showStatus={false} showIndicators={false} showArrows={false} showThumbs={false}>
          
              
                <span className="milk">
                  <h3>Milk</h3>
                  <img src="/นมสด.png" alt="coffee" />
                </span>
             
        </Carousel>
         </Link> 
      </div>

      <div className="item-col2-row2-item-Water">
        <Link to="/water">
        <Carousel showStatus={false} showIndicators={false} showArrows={false} showThumbs={false}>
          
            
            <span className="Water">
              <h3>Water</h3>
              <img src="/น้ำเปล่า.png" alt="profile" />
            </span>
          
         
          
        </Carousel>
        </Link> 
      </div>
    </div>

    {/*Block3*/}
    <div className="item-wrapper3">
      <div className="item-col1-row3-item-tea">
        <Link to="/tea">
        <Carousel showStatus={false} showIndicators={false} showArrows={false} showThumbs={false}>

            
            <span className="tea">
              <h3>Tea</h3>
              <img src="/thaitea.png" alt="profile" />
            </span>
         
         
        </Carousel> 
        </Link> 
      </div>

      <div className="item-col2-row3-item-fruit">
        <Link to="/fruit">
        <Carousel showStatus={false} showIndicators={false} showArrows={false} showThumbs={false}>
          
            
            <span className="fruit">
                <h3>Fruit</h3>
                <img src="/StrawberrySoda.png" alt="Fruit" />
             </span>


             
        </Carousel>
        </Link> 
      </div>
    </div>

    </>
  );
};

export default Item;
