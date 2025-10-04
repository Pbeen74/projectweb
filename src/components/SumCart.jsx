import React from "react";
import Back from "./back";
import { useCart } from "../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";

function SumCart() {
  const { cart, cartTotal, updateItem, removeItem, checkout } = useCart();
  const navigate = useNavigate();

  const handlePay = () => {
    const orderId = checkout(); // ย้ายของในตะกร้าไปเข้า orders
    if (orderId) {
      navigate("/receipt"); // ไปหน้าประวัติคำสั่งซื้อ
    }
  };

  return (
    <>
      <Back />
      <div className="receipt">
        <h2>🧺 สรุปรายการในตะกร้า</h2>

        {cart.length === 0 ? (
          <p>ยังไม่มีสินค้าในตะกร้า</p>
        ) : (
          <>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {cart.map(item => (
                <li key={item.id} style={{ marginBottom: "12px" }}>
                  <div style={{ fontWeight: 600 }}>{item.name} — ฿ {item.price}</div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <button onClick={() => updateItem(item.id, item.qty - 1)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateItem(item.id, item.qty + 1)}>+</button>
                    <button onClick={() => removeItem(item.id)} style={{ color: "red" }}>
                      ลบ
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <h3>รวมทั้งหมด: ฿ {cartTotal}</h3>

            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              <button onClick={() => navigate(-1)}>🔙 กลับไปเลือกต่อ</button>
              <button
                onClick={handlePay}
                style={{ background: "green", color: "white", padding: "8px 16px", borderRadius: 6 }}
              >
                💳 ชำระเงิน
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default SumCart;
