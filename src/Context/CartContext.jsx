import { createContext, useState } from "react";

export const CartContext = createContext;

export const CartProvider = (children) => {
  const [Cart, setCart] = useState([]);

  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};
