import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cart");
    if (cartItems) {
      setCart(JSON.parse(cartItems));
    }
  }, []);

  const addToCart = (product, amount) => {
    if (cart.length === 0) {
      localStorage.setItem("cart", JSON.stringify([{ product, amount }]));
      setCart([{ product, amount }]);
    } else {
      if (!cart.some((val) => val.product.id === product.id)) {
        localStorage.setItem(
          "cart",
          JSON.stringify([...cart, { product, amount }])
        );
        setCart((prev) => [...prev, { product, amount }]);
      } else {
        //update amount
        localStorage.setItem(
          "cart",
          JSON.stringify(
            cart.map((val) =>
              val.product.id === product.id
                ? { ...val, amount: val.amount + amount }
                : val
            )
          )
        );
        setCart(
          cart.map((val) =>
            val.product.id === product.id
              ? { ...val, amount: val.amount + amount }
              : val
          )
        );
      }
    }
    toast.success("Item added to cart");
  };

  const increment = (id) => {
    localStorage.setItem(
      "cart",
      JSON.stringify(
        cart.map((val) =>
          val.product.id === id ? { ...val, amount: val.amount + 1 } : val
        )
      )
    );

    setCart(
      cart.map((val) =>
        val.product.id === id ? { ...val, amount: val.amount + 1 } : val
      )
    );
  };

  const decrement = (id) => {
    localStorage.setItem(
      "cart",
      JSON.stringify(
        cart.map((val) =>
          val.product.id === id ? { ...val, amount: val.amount - 1 } : val
        )
      )
    );
    setCart(
      cart.map((val) =>
        val.amount > 1 && val.product.id === id
          ? { ...val, amount: val.amount - 1 }
          : val
      )
    );
  };

  const removeAll = (showAlert = true) => {
    localStorage.removeItem("cart");
    setCart([]);
    showAlert && cart.length !== 0 && toast.success("Cart cleared");
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increment, decrement, removeAll }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
