"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
const CART_KEY = "bin_akber_cart";

export function CartProvider({ children }) {
  // شروع میں خالی ارے (Empty Array) رکھیں تاکہ سرور پریشان نہ ہو
  const [items, setItems] = useState([]);

  // صرف براؤزر پر ڈیٹا لوڈ کریں
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(CART_KEY);
      if (raw) {
        setItems(JSON.parse(raw));
      }
    } catch (error) {
      console.error("Cart loading failed:", error);
    }
  }, []);

  const addToCart = (book) => {
    const nextItems = items.find((item) => item.id === book.id)
      ? items.map((item) => (item.id === book.id ? { ...item, qty: item.qty + 1 } : item))
      : [...items, { ...book, qty: 1 }];

    setItems(nextItems);
    window.localStorage.setItem(CART_KEY, JSON.stringify(nextItems));
  };

  const removeFromCart = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
    window.localStorage.setItem(CART_KEY, JSON.stringify(nextItems));
  };

  const clearCart = () => {
    setItems([]);
    window.localStorage.setItem(CART_KEY, JSON.stringify([]));
  };

  const itemCount = items.reduce((sum, item) => sum + item.qty, 0);
  const grandTotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  const value = useMemo(
    () => ({ items, addToCart, removeFromCart, clearCart, itemCount, grandTotal }),
    [items, itemCount, grandTotal],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}