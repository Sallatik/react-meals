import Header from "./components/Header";
import Info from "./components/Info";
import MealList from "./components/MealList";
import { CartContextProvider } from "./context/CartContext";
import { useState } from "react";
import Cart from "./components/Cart";

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);
  return (
    <CartContextProvider>
      {cartOpen && <Cart onClose={closeCart} />}
      <Header onOpenCart={openCart} />
      <Info />
      <MealList />
    </CartContextProvider>
  );
};

export default App;
