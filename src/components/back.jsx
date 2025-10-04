import React from "react";
import { useNavigate } from "react-router-dom";

function Back() {
  const navigate = useNavigate();

  const handleBack = () => {
    // ถ้ามีหน้าก่อนหน้าให้ย้อนกลับ
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      // ถ้าไม่มี (เปิดมาหน้าแรกเลย) → กลับไปหน้า Home
      navigate("/");
    }
  };

  return (
    <div className="backward" onClick={handleBack}>
      <img className="img_back" src="go-back.svg" alt="backward" />
    </div>
  );
}

export default Back;
