import React, { useState } from 'react';
import Back from "./back";
import Add_cart from "./add_cart";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import Button from './button.jsx';

function Milk() {

  const { addItem } = useCart(); // ใช้ฟังก์ชันจาก CartContext
  const navigate = useNavigate();
  const [countNormal, setCountNormal] = useState(0); // นมสด
  const [countPink, setCountPink] = useState(0);     // นมชมพู


  // ฟังก์ชันไปหน้าใบเสร็จ
  const handleAddToCart = () => {
    if (countNormal > 0) {
      addItem({ id: "milk-normal", name: "นมสด", price: 40, qty: countNormal });
      setCountNormal(0);
    }
    if (countPink > 0) {
      addItem({ id: "milk-pink", name: "นมชมพู", price: 50, qty: countPink });
      setCountPink(0);
    }
  };

  return (
    <div className="milk_wrap">
      <Back />
      <h2>🥛 Milk</h2>  
      <div className="milk_display">

        {/* milk_normal */}
        <div className="milk_item">
          <img src="นมสด.png" alt="นมสด" />
          <h3 id='milk_normal'>นมสด : 40 ฿</h3>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <button onClick={() => setCountNormal(Math.max(0, countNormal - 1))}>-</button>
            <span>{countNormal}</span>
            <button onClick={() => setCountNormal(countNormal + 1)}>+</button>
          </div>
        </div>  

        {/* milk_pink */}
        <div className="milk_item">
          <img id='milk_pink' src="นมชมพู.png" alt="นมชมพู" />
          <h3>นมชมพู : 50 ฿</h3>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <button onClick={() => setCountPink(Math.max(0, countPink - 1))}>-</button>
            <span>{countPink}</span>
            <button onClick={() => setCountPink(countPink + 1)}>+</button>
          </div>
        </div>

      </div>


      {/* ส่ง props ไป Add_cart */}
       <Add_cart onClick={handleAddToCart} />
    
      <Button onClick={handleAddToCart}/>
    </div>
  );
}

export default Milk;
