import React from 'react'
import { useState } from "react";
import Back from "./back";
import { useCart } from "../context/CartContext.jsx";
import Add_cart from "./add_cart";
import Button from "./button";
import { useNavigate } from "react-router-dom";

function coffee() {
  const { addItem } = useCart();
  const navigate = useNavigate();

   const [countBlackcoffee, setCountBlackcoffee] = useState(0);
   const [countCapuchi,setCountCapuchi] = useState(0);
   const [countLatte,setCountLatte] = useState(0);
   const [countEspresso,setCountEspresso] = useState(0);

   const handleAddToCart = () => {
    if (countBlackcoffee > 0) {
      addItem({ id: "Blackcoffee", name: "กาแฟดำ", price: 50, qty: countBlackcoffee });
      setCountBlackcoffee(0);
    }
    if (countCapuchi > 0) {
      addItem({id:"Capuchi", name:"คาปูชิโน่" , price:60, qty:countCapuchi})
      setCountCapuchi(0);
    }
    if (countLatte > 0 ){
      addItem({id:"Latte", name:"ลาเต้" , price:60 , qty:countLatte})
      setCountLatte(0);
    }
    if (countEspresso > 0) {
      addItem({id:"Espresso", name:"เอสเพรสโซ", price:60 ,qty:countEspresso})
      setCountEspresso(0);
    }
  };
  return (
    <>
      <div className='coffee-wrap'>
        <Back />
        <h2>☕️ Coffee Menu</h2>
        <div className="coffee_display">
        {/* black_coffee */}
        <div>
          <img className="col1-row1-coffee" src="blackcoffee.png" alt="black coffee" />
          <h3>กาแฟดำ: 50 ฿</h3> 
          <div className="middle">
            <button onClick={() => setCountBlackcoffee(Math.max(0, countBlackcoffee - 1))}>-</button>
            <span>{countBlackcoffee}</span>
            <button onClick={() => setCountBlackcoffee(countBlackcoffee + 1)}>+</button>
          </div>
        </div>

        {/* capuchino */}
        <div>
          <img className="col2-row1-coffee" src="capuchi.png" alt="capuchino" />
        <h3 >คาปุชิโน้: 60 ฿</h3>
        <div className="middle">
          <button onClick={() => setCountCapuchi(Math.max(0, countCapuchi - 1))}>-</button>
          <span>{countCapuchi}</span>
          <button onClick={() => setCountCapuchi(Math.max(0, countCapuchi + 1))}>+</button>
          </div>
          
        </div>

        {/* Latte */}
        <div>
          <img className="col1-row2-coffee" src="Latte.png" alt="latte" />
          <h3>ลาเต้: 60 ฿</h3>
          <div className="middle">
            <button onClick={() => setCountLatte(Math.max(0, countLatte - 1))}>-</button>
          <span>{countLatte}</span>
          <button onClick={() => setCountLatte(Math.max(0, countLatte + 1))}>+</button>
          </div>
          
        </div>

        {/* wEspresso */}
        <div>
          <img className="col2-row2-coffee" src="Espresso.png" alt="Espresso" />
          <h3 >เอสเพรสโซ่: 60 ฿</h3>
          <div className="middle">
            <button onClick={() => setCountEspresso(Math.max(0, countEspresso - 1))}>-</button>
          <span>{countEspresso}</span>
          <button onClick={() => setCountEspresso(Math.max(0, countEspresso+ 1))}>+</button>
          </div>
        </div>
        </div>

       
      {/* ส่ง props ไป Add_cart */}
       <Add_cart onClick={handleAddToCart} />
    
       <Button onClick={handleAddToCart} />
      </div>
    </>
    
  )
}

export default coffee