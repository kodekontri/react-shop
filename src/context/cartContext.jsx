import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";

export const cartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || {}
  );
  const itemsCount = Object.keys(cart).length;

  useEffect(
    function () {
      localStorage.setItem("cart", JSON.stringify(cart));
    },
    [cart]
  );

  const addItem = (id) => {
    setCart((previousCart) => ({
      ...previousCart,
      [id]: previousCart[id] ? previousCart[id] + 1 : 1,
    }));

    toast("Item has been added to cart");
  };

  const removeItem = (id) => {
    setCart((prev) => {
      delete prev[id];
      return { ...prev };
    });
    toast("Item has been removed from cart");
  };

  return (
    <cartContext.Provider
      value={{ items: cart, addItem, removeItem, itemsCount }}
    >
      {children}
    </cartContext.Provider>
  );
};
