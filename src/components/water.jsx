import React, { useState } from 'react';
import Back from "./back";
import Add_cart from "./add_cart";
import Button from "./button";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

function water() {

  const { addItem } = useCart(); // ใช้ฟังก์ชันจาก CartContext
  const navigate = useNavigate();
  const [countWater, setCountWater] = useState(0); // นมสด

   // ฟังก์ชันไปหน้าใบเสร็จ
  const handleAddToCart = () => {
    if (countWater > 0) {
      addItem({ id: "water", name: "น้ำเปล่า", price: 10, qty: countWater });
      setCountWater(0);
    }
  };
  return (
    <>
    <div className="water_wrap">
      <Back />
      <h2>💧 Water</h2>
      <div className="water_display">
        {/* water_normal */}
        <div className="water_item">
          <img src="น้ำเปล่า.png" alt="น้ำเปล่า" />
          <h3 >น้ำเปล่า : 10 ฿</h3>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <button onClick={() => setCountWater(Math.max(0, countWater - 1))}>-</button>
            <span>{countWater}</span>
            <button onClick={() => setCountWater(countWater+ 1)}>+</button>
          </div>
        </div>

      </div>
      <button 
        style={{ marginTop: "20px", padding: "10px 20px", alignItems:"center" }}
        onClick={handleAddToCart}
      >
        เพิ่มสินค้าที่เลือกลงตะกร้า
      </button>

      {/* ส่ง props ไป Add_cart */}
       <Add_cart onClick={handleAddToCart} />

       <Button onClick={handleAddToCart}/>
    </div>
    </>
    
  )
}

export default water