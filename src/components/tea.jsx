import React, { useState } from 'react';
import Back from "./back";
import Add_cart from "./add_cart";
import Button from "./button";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

function tea() {

  const { addItem } = useCart(); // ใช้ฟังก์ชันจาก CartContext
  const navigate = useNavigate();
  const [countMatcha, setCountMatcha] = useState(0); 
  const [countThaitea, setCountThaitea] = useState(0);     


  // ฟังก์ชันไปหน้าใบเสร็จ
  const handleAddToCart = () => {
    if (countMatcha > 0) {
      addItem({ id: "matcha", name: "มัจฉะ", price: 40, qty: countMatcha });
      setCountMatcha(0);
    }
    if (countThaitea > 0) {
      addItem({ id: "thaitea", name: "ชาไทย", price: 50, qty: countThaitea });
      setCountThaitea(0);
    }
  };

  return (
    <div className="tea_wrap">
      <Back />
      <h2>🍵 tea</h2>  
      <div className="tea_display">

        {/* Matcha */}
        <div className="tea_item">
          <img src="matcha.png" alt="มัจฉะ" />
          <div className="matcha_h3">
            <h3 >มัจฉะ : 40 ฿</h3>
          <div className='middle'>
            <button onClick={() => setCountMatcha(Math.max(0, countMatcha - 1))}>-</button>
            <span>{countMatcha}</span>
            <button onClick={() => setCountMatcha(countMatcha + 1)}>+</button>
          </div>
          </div>
          
        </div>  

        {/* milk_pink */}
        <div className="tea_item">
          <img  src="thaitea.png" alt="ชาไทย" />
          <h3>ชาไทย : 50 ฿</h3>
          <div className='middle'>
            <button onClick={() => setCountThaitea(Math.max(0, countThaitea - 1))}>-</button>
            <span>{countThaitea}</span>
            <button onClick={() => setCountThaitea(countThaitea + 1)}>+</button>
          </div>
        </div>

      </div>


      {/* ส่ง props ไป Add_cart */}
       <Add_cart onClick={handleAddToCart} />

       <Button onClick={handleAddToCart}/>
    </div>
  );
}

export default tea;
