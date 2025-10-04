import React from 'react'

function Button({onClick}) {
  return (
    <button
        style={{ marginTop: "20px", padding: "10px 20px", display:"block" }}
        onClick={onClick}
      >
        เพิ่มสินค้าที่เลือกลงตะกร้า
      </button>
  )
}

export default Button