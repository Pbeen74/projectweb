import React, { useState } from 'react'
import Back from "./back";
import Add_cart from "./add_cart";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import Button from "./button";

function Fruit() {
  const { addItem } = useCart(); 
  const navigate = useNavigate();

  // state เก็บจำนวนสินค้า
  const [countStrawberrySoda, setCountStrawberrySoda] = useState(0);
  const [countStrawberrySmoothie, setCountStrawberrySmoothie] = useState(0);
  const [countAppleSoda, setCountAppleSoda] = useState(0);

  const handleAddToCart = () => {
    if (countStrawberrySoda > 0) {
      addItem({ id: "StrawberrySoda", name: "สตรอเบอร์รี่โซดา", price: 50, qty: countStrawberrySoda });
      setCountStrawberrySoda(0);
    }
    if (countStrawberrySmoothie > 0) {
      addItem({ id: "StrawberrySmoothie", name: "สตรอเบอร์รี่สมูทตี้", price: 60, qty: countStrawberrySmoothie });
      setCountStrawberrySmoothie(0);
    }
    if (countAppleSoda > 0) {
      addItem({ id: "AppleSoda", name: "แอปเปิ้ลโซดา", price: 55, qty: countAppleSoda });
      setCountAppleSoda(0);
    }
  };

  return (
    <div className="fruit_wrap">
      <Back />
      <h2>🍓🍏 Fruit Menu</h2>  
      <div className="fruit_display">

        {/* Strawberry Soda */}
        <div className="fruit_item">
          <img src="StrawberrySoda.png" alt="สตรอเบอร์รี่โซดา" />
          <h3>สตรอเบอร์รี่โซดา : 50 ฿</h3>
          <div className="middle">
            <button onClick={() => setCountStrawberrySoda(Math.max(0, countStrawberrySoda - 1))}>-</button>
            <span>{countStrawberrySoda}</span>
            <button onClick={() => setCountStrawberrySoda(countStrawberrySoda + 1)}>+</button>
          </div>
        </div>  

        {/* Strawberry Smoothie */}
        <div className="fruit_item">
          <img id='str_smo' src="StrawberrySmoothie.png" alt="สตรอเบอร์รี่สมูทตี้" />
          <h3>สตรอเบอร์รี่สมูทตี้ : 60 ฿</h3>
          <div className="middle">
            <button onClick={() => setCountStrawberrySmoothie(Math.max(0, countStrawberrySmoothie - 1))}>-</button>
            <span>{countStrawberrySmoothie}</span>
            <button onClick={() => setCountStrawberrySmoothie(countStrawberrySmoothie + 1)}>+</button>
          </div>
        </div>

        {/* Apple Soda */}
        <div className="fruit_item">
          <img src="AppleSoda.png" alt="แอปเปิ้ลโซดา" />
          <h3>แอปเปิ้ลโซดา : 55 ฿</h3>
          <div className="middle">
            <button onClick={() => setCountAppleSoda(Math.max(0, countAppleSoda - 1))}>-</button>
            <span>{countAppleSoda}</span>
            <button onClick={() => setCountAppleSoda(countAppleSoda + 1)}>+</button>
          </div>
        </div>

      </div>


      {/* ไอคอนตะกร้า */}
      <Add_cart />

      <Button onClick={handleAddToCart}/>
    </div>
  )
}

export default Fruit;
