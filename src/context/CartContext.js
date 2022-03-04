import React, { useState } from "react";

const CartContext = React.createContext({});

export default CartContext;

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const addMeal = (meal) =>
    setCart((prev) => {
      const prevAmount = prev[meal.id] || 0;
      return { ...prev, [meal.id]: prevAmount + meal.amount };
    });

  const mealCount = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <CartContext.Provider value={{ addMeal, mealCount }}>
      {children}
    </CartContext.Provider>
  );
};
