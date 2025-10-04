import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // ตะกร้าปัจจุบัน
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });
  // ประวัติคำสั่งซื้อ
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("orders");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem("cart", JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem("orders", JSON.stringify(orders)); }, [orders]);

  const addItem = (item) => {
    setCart(prev => {
      const exist = prev.find(i => i.id === item.id);
      if (exist) {
        return prev.map(i => (i.id === item.id ? { ...i, qty: i.qty + item.qty } : i));
      }
      return [...prev, { ...item }];
    });
  };

  const updateItem = (id, qty) => {
    setCart(prev =>
      prev
        .map(i => (i.id === id ? { ...i, qty: Math.max(0, qty) } : i))
        .filter(i => i.qty > 0)
    );
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const clearCart = () => setCart([]);

  // ย้าย cart ปัจจุบันไปเป็น "คำสั่งซื้อใหม่" แล้วเคลียร์ cart
  const checkout = () => {
    if (cart.length === 0) return null;
    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
    const count = cart.reduce((s, i) => s + i.qty, 0);
    const order = {
      id: `ORD-${Date.now()}`,
      createdAt: new Date().toISOString(),
      items: cart,
      total,
      count,
    };
    setOrders(prev => [order, ...prev]);
    setCart([]);
    return order.id;
  };

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => s + i.qty * i.price, 0);

  return (
    <CartContext.Provider
      value={{
        cart, addItem, updateItem, removeItem, clearCart,
        checkout, orders, cartCount, cartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
