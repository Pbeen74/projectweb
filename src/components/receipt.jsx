import React from "react";
import Back from "./back";
import { useCart } from "../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";
import { FiX } from "react-icons/fi";

function Receipt() {
  const { orders } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <Back />
      <div className="receipt">
        <h2>🧾 ประวัติคำสั่งซื้อ</h2>

        {orders.length === 0 ? (
          <p>ยังไม่มีคำสั่งซื้อที่ผ่านมา</p>
        ) : (
          orders.map(order => (
            <div key={order.id} style={{ marginBottom: 24 }}>
              <h4 style={{ marginBottom: 8 }}>
                ออเดอร์: {order.id} • {new Date(order.createdAt).toLocaleString("th-TH")}
              </h4>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left", borderBottom: "1px solid #ddd", padding: 6 }}>สินค้า</th>
                    <th style={{ textAlign: "right", borderBottom: "1px solid #ddd", padding: 6 }}>จำนวน</th>
                    <th style={{ textAlign: "right", borderBottom: "1px solid #ddd", padding: 6 }}>ราคา/ชิ้น</th>
                    <th style={{ textAlign: "right", borderBottom: "1px solid #ddd", padding: 6 }}>ราคารวม</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items.map(it => (
                    <tr key={it.id}>
                      <td style={{ padding: 6 }}>{it.name}</td>
                      <td style={{ padding: 6, textAlign: "right" }}>{it.qty}</td>
                      <td style={{ padding: 6, textAlign: "right" }}>฿ {it.price}</td>
                      <td style={{ padding: 6, textAlign: "right" }}>฿ {it.price * it.qty}</td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={3} style={{ padding: 6, textAlign: "right", fontWeight: 700 }}>
                      รวมออเดอร์นี้
                    </td>
                    <td style={{ padding: 6, textAlign: "right", fontWeight: 700 }}>฿ {order.total}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))
        )}

        <button onClick={() => navigate("/")} style={{ marginTop: 12}}>
          🏠 กลับหน้า Home
        </button>
      </div>
    </>
  );
}

export default Receipt;
