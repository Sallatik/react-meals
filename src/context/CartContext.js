import React, { useState } from "react";

const CartContext = React.createContext({});

export default CartContext;

const addMeal = (meal) => (cart) => {
  const prevMeal = cart[meal.id];
  const newMeal = prevMeal
    ? { ...prevMeal, amount: prevMeal.amount + meal.amount }
    : meal;
  return { ...cart, [meal.id]: newMeal };
};

const incrementMealAmount = (mealId) => (cart) => {
  const prevMeal = cart[mealId];
  const newMeal = { ...prevMeal, amount: prevMeal.amount + 1 };
  return { ...cart, [mealId]: newMeal };
};

const decrementMealAmount = (mealId) => (cart) => {
  const prevMeal = cart[mealId];
  const newMeal = { ...prevMeal, amount: prevMeal.amount - 1 };
  return newMeal.amount > 0
    ? { ...cart, [mealId]: newMeal }
    : withRemovedMeal(cart, mealId);
};

const withRemovedMeal = (cart, mealId) => {
  const newCart = { ...cart };
  delete newCart[mealId];
  return newCart;
};

const totalAmount = (cart) =>
  Object.values(cart)
    .map(({ amount }) => amount)
    .reduce((a, b) => a + b, 0);

const totalPrice = (cart) =>
  Object.values(cart)
    .map(({ price, amount }) => price * amount)
    .reduce((a, b) => a + b, 0);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  return (
    <CartContext.Provider
      value={{
        addMeal: (meal) => setCart(addMeal(meal)),
        incrementMealAmount: (mealId) => setCart(incrementMealAmount(mealId)),
        decrementMealAmount: (mealId) => setCart(decrementMealAmount(mealId)),
        totalAmount: totalAmount(cart),
        totalPrice: totalPrice(cart),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
