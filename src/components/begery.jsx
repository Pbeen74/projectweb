import { useState } from "react";
import Back from "./back";
import { useCart } from "../context/CartContext.jsx";
import Add_cart from "./add_cart";
import { useNavigate } from "react-router-dom";
import Button from "./button";

function Begery() {
  const { addItem } = useCart();
  const navigate = useNavigate();

   // state เก็บจำนวนสินค้าของแต่ละเมนู
  const [countBread, setCountBread] = useState(0);
  const [countCookie, setCountCookie] = useState(0);
  const [countToast, setCountToast] = useState(0);
  const [countWaffle, setCountWaffle] = useState(0);

  const handleAddToCart = () => {
    if (countBread > 0) {
      addItem({ id: "bread", name: "ครัวซอง", price: 50, qty: countBread });
      setCountBread(0);
    }
    if (countCookie > 0) {
      addItem({ id: "cookie", name: "คุกกี้", price: 20, qty: countCookie });
      setCountCookie(0);
    }
    if (countToast > 0) {
      addItem({ id: "honey-toast", name: "ฮันนี่โทส", price: 100, qty: countToast });
      setCountToast(0);
    }
    if (countWaffle > 0) {
      addItem({ id: "waffle", name: "วาฟเฟิล", price: 30, qty: countWaffle });
      setCountWaffle(0);
    }
  };
  return (
    <div className="Begery-wrap">
      <Back />
      <h2>🥯 Begery Menu</h2>

      <div className="bread-display">
        {/* bread */}
        <div>
          <img className="col1-row1-begery" src="bread.png" alt="bread" />
          <h3>ครัวซอง : 50</h3>
          <div className="middle">
            <button onClick={() => setCountBread(Math.max(0, countBread - 1))}>-</button>
            <span>{countBread}</span>
            <button onClick={() => setCountBread(countBread + 1)}>+</button>
          </div>
        </div>

        {/* cookie */}
        <div>
          <img className="col2-row1-begery" src="cookie.png" alt="cookie" />
        <h3 className="cookie_h3">คุกกี้ : 20</h3>
          <div className="middle" >
            <button onClick={() => setCountCookie(Math.max(0, countCookie - 1))}>-</button>
            <span>{countCookie}</span>
            <button onClick={() => setCountCookie(countCookie + 1)}>+</button>
          </div>
        </div>

        {/* honey toast */}
        <div>
          <img className="col1-row2-begery" src="honneytoast.png" alt="honneytoast" />
          <h3>ฮันนี่โทส : 100</h3>
          <div className="middle">
            <button onClick={() => setCountToast(Math.max(0, countToast - 1))}>-</button>
            <span>{countToast}</span>
            <button onClick={() => setCountToast(countToast + 1)}>+</button>
          </div>
        </div>

        {/* waffle */}
        <div>
          <img className="col2-row2-begery" src="waffle.png" alt="waffle" />
          <h3 className="waffle_h4">วาฟเฟิล : 30</h3>
          <div className="middle">
            <button onClick={() => setCountWaffle(Math.max(0, countWaffle - 1))}>-</button>
            <span>{countWaffle}</span>
            <button onClick={() => setCountWaffle(countWaffle + 1)}>+</button>
          </div>
        </div>
      </div>

      {/* ส่ง props ไป Add_cart */}
       <Add_cart onClick={handleAddToCart} />
       <Button onClick={handleAddToCart}/>
    </div>
    
  );
}

export default Begery;
