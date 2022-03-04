import Header from "./components/Header";
import Info from "./components/Info";
import MealList from "./components/MealList";
import { CartContextProvider } from "./context/CartContext";
import { useState } from "react";
import Cart from "./components/Cart";

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <CartContextProvider>
      <Header onOpenCart={() => setCartOpen(true)} />
      {cartOpen && <Cart onClose={() => setCartOpen(false)} />}
      <Info />
      <MealList />
    </CartContextProvider>
  );
};

export default App;
