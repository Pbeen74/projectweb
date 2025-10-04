import './App.css'
import Navbar from "./components/Navbar.jsx";
import Promotion from "./components/Promotion.jsx";
import Item from "./components/Item.jsx";
import Contact from "./components/Contact.jsx";
import Coffee from "./components/coffee.jsx";
import Begery from "./components/begery.jsx";
import Milk from "./components/milk.jsx";
import Water from "./components/water.jsx";
import Tea from "./components/tea.jsx";
import Fruit from "./components/Fruit.jsx";
import Receipt from "./components/receipt";
import SumCart from "./components/SumCart.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      {/* หน้าแรก มี Layout ครบ */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Promotion />
            <Item />
            <Contact />
          </>
        }
      />

      {/* หน้าต่างๆ ที่เหลือ โชว์แค่ตัวเอง */}
      <Route path="/begery" element={<Begery />} />
      <Route path="/coffee" element={<Coffee />} />
      <Route path="/milk" element={<Milk />} />
      <Route path="/water" element={<Water />} />
      <Route path="/tea" element={<Tea />} /> 
      <Route path="/fruit" element={<Fruit />} /> 

      {/*หน้ารวมสินค้า*/}
      <Route path="/sumcart" element={<SumCart />} />
      {/* 🧾 ใบเสร็จ */}
      <Route path="/receipt" element={<Receipt />} />
    </Routes>
  );
}

export default App;
